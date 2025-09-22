// Комментарий: Инициализация и сервисы для Firebase. Client-side только: Realtime DB для sync, Auth для авторизации, Cloud Messaging для push. Offline-first с merge LocalStorage.

import { initializeApp, FirebaseApp } from 'firebase/app';
import { 
  getDatabase, 
  Database, 
  ref, 
  onValue, 
  set, 
  push,
  remove,
  update
} from 'firebase/database';
import { 
  getAuth, 
  Auth, 
  signInAnonymously, 
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { 
  getMessaging, 
  Messaging, 
  getToken,
  onMessage
} from 'firebase/messaging';
import { 
  getFirestore, 
  Firestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs
} from 'firebase/firestore';

// Проверяем, есть ли переменные окружения
const hasFirebaseConfig = import.meta.env.VITE_FIREBASE_API_KEY && 
                         import.meta.env.VITE_FIREBASE_AUTH_DOMAIN && 
                         import.meta.env.VITE_FIREBASE_DATABASE_URL && 
                         import.meta.env.VITE_FIREBASE_PROJECT_ID && 
                         import.meta.env.VITE_FIREBASE_STORAGE_BUCKET && 
                         import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID && 
                         import.meta.env.VITE_FIREBASE_APP_ID;

let app: FirebaseApp | undefined;
export let db: Database | undefined;
export let firestore: Firestore | undefined;
export let auth: Auth | undefined;
let messaging: Messaging | undefined;
let currentUser: User | null = null;

if (hasFirebaseConfig) {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

  app = initializeApp(firebaseConfig);
  db = getDatabase(app);
  firestore = getFirestore(app);
  auth = getAuth(app);
  messaging = getMessaging(app);
  
  // Слушатель состояния аутентификации
  if (auth) {
    onAuthStateChanged(auth, (user) => {
      currentUser = user;
      if (!user && auth) {
        // Анонимная аутентификация при запуске
        signInAnonymously(auth).catch((error) => {
          console.error('Ошибка анонимной аутентификации:', error);
        });
      }
    });
  }
}

// Инициализация FCM
export async function initializeFCM() {
  if (!messaging || !hasFirebaseConfig) return null;
  
  try {
    const token = await getToken(messaging, { 
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY 
    });
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Ошибка получения FCM токена:', error);
    return null;
  }
}

// Слушатель входящих сообщений
export function onFCMMessage(callback: (payload: any) => void) {
  if (!messaging) return;
  
  onMessage(messaging, (payload) => {
    console.log('Получено сообщение:', payload);
    callback(payload);
  });
}

// Синхронизация данных семьи
export async function syncFamilyData(familyId: string, onDataChange: (data: any) => void) {
  if (!db || !familyId) return null;
  
  try {
    const familyRef = ref(db, `families/${familyId}`);
    
    return onValue(familyRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        onDataChange(data);
      }
    }, (error) => {
      console.error('Ошибка синхронизации данных семьи:', error);
    });
  } catch (error) {
    console.error('Ошибка при настройке синхронизации:', error);
    return null;
  }
}

// Обновление данных меню в Firebase
export async function updateMenuInDB(familyId: string, menu: any) {
  if (!db || !familyId) {
    console.log('Firebase не настроен или отсутствует ID семьи');
    return;
  }

  try {
    const menuRef = ref(db, `families/${familyId}/menu`);
    await set(menuRef, menu);
    console.log('Меню успешно обновлено в Firebase');
  } catch (error) {
    console.error('Ошибка обновления меню в Firebase:', error);
  }
}

// Обновление списка покупок в Firebase
export async function updateShoppingListInDB(familyId: string, shoppingList: any) {
  if (!db || !familyId) {
    console.log('Firebase не настроен или отсутствует ID семьи');
    return;
  }

  try {
    const shoppingListRef = ref(db, `families/${familyId}/shoppingList`);
    await set(shoppingListRef, shoppingList);
    console.log('Список покупок успешно обновлен в Firebase');
  } catch (error) {
    console.error('Ошибка обновления списка покупок в Firebase:', error);
  }
}

// Отправка запроса в семью
export async function sendFamilyRequest(familyId: string, request: any) {
  if (!db || !familyId) {
    console.log('Firebase не настроен или отсутствует ID семьи');
    return;
  }

  try {
    const requestsRef = ref(db, `families/${familyId}/requests`);
    const newRequestRef = push(requestsRef);
    await set(newRequestRef, {
      ...request,
      timestamp: new Date().toISOString(),
      authorId: currentUser?.uid || 'anonymous'
    });
    console.log('Запрос успешно отправлен');
  } catch (error) {
    console.error('Ошибка отправки запроса:', error);
    throw error;
  }
}

// Получение запросов семьи
export async function getFamilyRequests(familyId: string, callback: (requests: any[]) => void) {
  if (!db || !familyId) return;
  
  try {
    const requestsRef = ref(db, `families/${familyId}/requests`);
    return onValue(requestsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const requests = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        callback(requests);
      } else {
        callback([]);
      }
    });
  } catch (error) {
    console.error('Ошибка получения запросов:', error);
  }
}

// Логирование события аналитики
export async function logAnalyticsEvent(event: any) {
  if (!firestore) {
    console.log('Firestore не настроен');
    return;
  }

  try {
    const docRef = await addDoc(collection(firestore, 'analytics', 'events'), {
      ...event,
      timestamp: new Date()
    });
    console.log('Событие аналитики сохранено с ID:', docRef.id);
  } catch (error) {
    console.error('Ошибка логирования события аналитики:', error);
  }
}

// Получение последних событий аналитики
export async function getRecentAnalyticsEvents(limitCount: number = 50) {
  if (!firestore) return [];
  
  try {
    const q = query(
      collection(firestore, 'analytics', 'events'),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    const events: any[] = [];
    
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    
    return events;
  } catch (error) {
    console.error('Ошибка получения событий аналитики:', error);
    return [];
  }
}
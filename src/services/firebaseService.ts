// Комментарий: Инициализация и сервисы для Firebase. Client-side только: Realtime DB для sync, Auth для авторизации, Cloud Messaging для push. Offline-first с merge LocalStorage.

import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, Database, ref, onValue, set } from 'firebase/database';
import { getAuth, Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { getMessaging, Messaging, getToken } from 'firebase/messaging';

// Проверяем, есть ли переменные окружения
const hasFirebaseConfig = import.meta.env.VITE_FIREBASE_API_KEY && 
                         import.meta.env.VITE_FIREBASE_AUTH_DOMAIN && 
                         import.meta.env.VITE_FIREBASE_DATABASE_URL && 
                         import.meta.env.VITE_FIREBASE_PROJECT_ID && 
                         import.meta.env.VITE_FIREBASE_STORAGE_BUCKET && 
                         import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID && 
                         import.meta.env.VITE_FIREBASE_APP_ID;

let app: FirebaseApp | undefined;
let db: Database | undefined;
let auth: Auth | undefined;
let messaging: Messaging | undefined;

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
  auth = getAuth(app);
  messaging = getMessaging(app);
}

export async function firebaseSync(state: any, dispatch: any) {
  // Если Firebase не настроен, просто возвращаемся
  if (!hasFirebaseConfig || !auth || !db || !messaging) {
    console.log('Firebase не настроен, синхронизация отключена');
    return;
  }

  // Авторизация (пример: email/password)
  try {
    await signInWithEmailAndPassword(auth, 'user@example.com', 'password');
  } catch (error) {
    console.error('Ошибка авторизации:', error);
  }

  // Realtime слушатель для /families/{familyId}
  const familyRef = ref(db, `/families/${state.familyId}`);
  onValue(familyRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      dispatch({ type: 'SET_MENU', payload: data.menu });  // Merge с локальным
    }
  });

  // Push-уведомления
  getToken(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY }).then((token) => {
    console.log('FCM Token:', token);
  });
}

export async function updateMenuInDB(familyId: string, menu: any) {
  // Если Firebase не настроен, просто возвращаемся
  if (!hasFirebaseConfig || !db) {
    console.log('Firebase не настроен, сохранение в БД отключено');
    return;
  }

  const familyRef = ref(db, `/families/${familyId}/menu`);
  await set(familyRef, menu);
  // Отправка push о изменениях (через FCM)
}
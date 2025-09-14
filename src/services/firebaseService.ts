// Комментарий: Инициализация и сервисы для Firebase. Client-side только: Realtime DB для sync, Auth для авторизации, Cloud Messaging для push. Offline-first с merge LocalStorage.

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export async function firebaseSync(state: any, dispatch: any) {
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
  const familyRef = ref(db, `/families/${familyId}/menu`);
  await set(familyRef, menu);
  // Отправка push о изменениях (через FCM)
}
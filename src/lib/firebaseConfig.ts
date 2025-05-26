// src/lib/firebaseConfig.ts
import { initializeApp, getApp, getApps, type FirebaseApp } from 'firebase/app';
// При необходимости, раскомментируйте импорты для других сервисов Firebase:
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCVCyC1rs0M6dgQYT7tjxyo6uyOrOTIW-g",
  authDomain: "deutschmeister-dnuo8.firebaseapp.com",
  projectId: "deutschmeister-dnuo8",
  storageBucket: "deutschmeister-dnuo8.firebasestorage.app",
  messagingSenderId: "170788001958",
  appId: "1:170788001958:web:200a8d3939df5e10583c67"
};

// Инициализация Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Если вы начнете использовать другие сервисы, раскомментируйте и экспортируйте их:
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { app, auth, db, storage };
export { app }; // Экспортируем пока только 'app', так как другие сервисы не используются

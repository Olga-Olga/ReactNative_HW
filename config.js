// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEJMlelB7GcnRFx4OzGA0Nav0GXHYtuG0",
  authDomain: "firstprojectrn-ca83e.firebaseapp.com",
  projectId: "firstprojectrn-ca83e",
  storageBucket: "firstprojectrn-ca83e.appspot.com",
  messagingSenderId: "726336773180",
  appId: "1:726336773180:web:d8b5a9448e574e6857f739",
  measurementId: "G-8BMXG1E1ND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

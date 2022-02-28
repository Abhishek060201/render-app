import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuah5L-rgG9BROdkhSjvv5wgLm00hy1fM",
  authDomain: "render-app-db8a2.firebaseapp.com",
  projectId: "render-app-db8a2",
  storageBucket: "render-app-db8a2.appspot.com",
  messagingSenderId: "888087288118",
  appId: "1:888087288118:web:3c8abbf881ee289c6dbb97"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
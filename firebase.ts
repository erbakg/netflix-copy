// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2F86neQYcw_RxQlHyj2AGIYrzZXMkua8',
  authDomain: 'netflix-clone-b71a8.firebaseapp.com',
  projectId: 'netflix-clone-b71a8',
  storageBucket: 'netflix-clone-b71a8.appspot.com',
  messagingSenderId: '284032572718',
  appId: '1:284032572718:web:3883a7376c41ea118a6ebf',
  measurementId: 'G-WT9JQ70V4H',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

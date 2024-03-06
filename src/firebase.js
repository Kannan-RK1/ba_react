import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyANXc1JVuq-rYsuiQFq5LQy_0VsR-kwSow",
  authDomain: "ba-demo-54547.firebaseapp.com",
  projectId: "ba-demo-54547",
  storageBucket: "ba-demo-54547.appspot.com",
  messagingSenderId: "452681480362",
  appId: "1:452681480362:web:59e20618f484408b0138d3",
  measurementId: "G-1R5H1DHX8Z",
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
//export const storage = getStorage(app);

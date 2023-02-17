import { initializeApp } from "firebase/app"
// import { getFirestore, collection, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBjyVXnCIuYSFRK_aH6_PcHEh4z4MBzhZU",
  authDomain: "app1-f6315.firebaseapp.com",
  projectId: "app1-f6315",
  storageBucket: "app1-f6315.appspot.com",
  messagingSenderId: "775139999487",
  appId: "1:775139999487:web:d5a631f727d33382ded6ca",
  measurementId: "G-1L7GTMD6EN"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);


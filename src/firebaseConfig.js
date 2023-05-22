
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Your config data
  apiKey: "AIzaSyC1LhkBOC3FU9xtBKkjyY4Vce4aaI8Bz38",
  authDomain: "docs-clone-6ffe4.firebaseapp.com",
  projectId: "docs-clone-6ffe4",
  storageBucket: "docs-clone-6ffe4.appspot.com",
  messagingSenderId: "379942306788",
  appId: "1:379942306788:web:4120f8f7679129bc6bfdf1",
  measurementId: "G-7WGL0ZJ2E4"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANz1I7IsKh3vIYr4Hz97JxL1QQGGfkJ7Y",
  authDomain: "devlinks-6b3c8.firebaseapp.com",
  projectId: "devlinks-6b3c8",
  storageBucket: "devlinks-6b3c8.appspot.com",
  messagingSenderId: "1059978600372",
  appId: "1:1059978600372:web:8523981a8c0a4efc405ce1",
  measurementId: "G-VXC0Y1PP6F"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};


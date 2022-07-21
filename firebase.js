
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore,  } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIw6prMtWDq9QENy9IjCH-aPHSCtjFFv8",
  authDomain: "react-native-auth-c2076.firebaseapp.com",
  projectId: "react-native-auth-c2076",
  storageBucket: "react-native-auth-c2076.appspot.com",
  messagingSenderId: "1025592289143",
  appId: "1:1025592289143:web:5d8be5606661b3a8a0e372",
  measurementId: "G-ZWPR0E31Z0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const db = getFirestore(app)
 export const storage = getStorage(app);
 export default app
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA4VA3ebRkeOvSVVZ8DU8n6XsT30S04-A",
  authDomain: "mytask-ec4c0.firebaseapp.com",
  projectId: "mytask-ec4c0",
  storageBucket: "mytask-ec4c0.appspot.com",
  messagingSenderId: "692695455450",
  appId: "1:692695455450:web:2dfa3f833c4d67310937e3",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//connect to the firestore db
export const db = getFirestore(app);

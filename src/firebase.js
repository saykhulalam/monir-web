// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase app configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgnjGNPZj4EXXcn0AoE_fQRBsPLxITw7A",
  authDomain: "monirshop-afab7.firebaseapp.com",
  projectId: "monirshop-afab7",
  storageBucket: "monirshop-afab7.appspot.com",
  messagingSenderId: "1082755384151",
  appId: "1:1082755384151:web:52b2f44a0cdc6b5cd57412",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default firebaseConfig;

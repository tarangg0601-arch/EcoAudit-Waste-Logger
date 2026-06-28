import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQSEY-rQeG0enBGumR7VjV274Jp66DoyA",
  authDomain: "ecoaudit-waste-logger.firebaseapp.com",
  projectId: "ecoaudit-waste-logger",
  storageBucket: "ecoaudit-waste-logger.firebasestorage.app",
  messagingSenderId: "458463179714",
  appId: "1:458463179714:web:6d73cc986c721f19509c5b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";

import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCcvqJ3qcJRocwPNDx7dSK102n4tHXdcag",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email, password) => {
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      authProvider: "local",
      uid: user.uid,  
    });
  } catch (error) {
    console.error("Error signing up:", error);
    toast.error("Invalid email or password");
    throw error;
  }
};

const login = async (email, password) => {
  try{
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error logging in:", error);
    toast.error(error.message || "Invalid email or password");
    throw error;
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, db, signUp, login, logout };

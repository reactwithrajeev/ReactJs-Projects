import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let signUp = async (name,email,password)=>{
    try{
        const userDetails = await createUserWithEmailAndPassword(auth,email,password);
        const user = userDetails.user;
        
        await setDoc(doc(db,"users",user.uid),{
            name:name,
            email:email,
            authProvider:"local",
            uid:user.uid,
        });
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
}


let signIn = async (email,password)=>{  
    try{
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.error("Error signing in:", error);
        throw error;
    }
}

let logout = async () => {  
    await signOut(auth);
}

export {auth,db,signUp,signIn,logout};

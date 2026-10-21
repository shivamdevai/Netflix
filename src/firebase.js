import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDxYkEEZCvxcngYnlvrHD8Ffp2lL0AK2R0",
  authDomain: "netflix-clone-f845d.firebaseapp.com",
  projectId: "netflix-clone-f845d",
  storageBucket: "netflix-clone-f845d.firebasestorage.app",
  messagingSenderId: "535344098198",
  appId: "1:535344098198:web:08bed40ee12b90f9d64bb7"
};

const app = initializeApp(firebaseConfig);     // same as mongoose.connect()

export const auth = getAuth(app)
export const db = getFirestore(app)

// Signup function
export const signup = async(name, email, password) => {
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password) 
       const user = res.user
       await addDoc(collection(db, "user"), {
        uid : user.uid,
        name,
        authProvider : "local",
        email
       })
       toast.success("Signup successfully")
    } catch (error) {
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" ") || "Email already in use")
    }
}

// Signin function
export const signin = async(email, password) => {
   try {
    await signInWithEmailAndPassword(auth, email, password)
    toast.success("Login successfully")
   } catch (error) {
    console.log(error)
     toast.error(error.code.split("/")[1].split("-").join(" ") || "Invalid credentials")
   }
}

// logout function
export const logout = () => {
    signOut(auth)
    toast.success("logout successfully")
}




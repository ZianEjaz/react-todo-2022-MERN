// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsdCy-3FAcHdMoBEBOFi3xOw4gjkcMJo8",
  authDomain: "mern-2022-ee114.firebaseapp.com",
  projectId: "mern-2022-ee114",
  storageBucket: "mern-2022-ee114.appspot.com",
  messagingSenderId: "563899946985",
  appId: "1:563899946985:web:5b5f99b5cb7860d23b9d78",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth)=>{
const userDocRef = doc(db,"users", userAuth.uid)

console.log(userDocRef)

const userSnapshot =await getDoc(userDocRef)
 console.log(userSnapshot)
 console.log(userSnapshot.exists())


if(!userSnapshot.exists()){
  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try{
await setDoc(userDocRef,{
  displayName,
  email,
  createdAt
})
  }
  catch(error){
  console.log("🚀 ~ file: firebase.js ~ line 58 ~ createUserDocument ~ error", error)

  }
}

return userDocRef
}
import React from "react";
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../utils/firebase/firebase.js';

const SignIn = () => {

  const logGoogleUser = async ()=>{
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (<div>
    <button onClick={logGoogleUser} className="p-4 "> 
      Sign IN With Google
    </button>
  </div>);
};
export default SignIn

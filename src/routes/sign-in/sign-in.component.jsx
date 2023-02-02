/* eslint-disable react-hooks/exhaustive-deps */
import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, } from "../../utils/firebase/firebase.utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const SignIn = () => {



  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user)
  }



  return (
    <div>
      SIGN IN
      <button onClick={logGoogleUser}>
        Sign In With Google
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;
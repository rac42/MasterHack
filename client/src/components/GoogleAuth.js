// import React from 'react'

import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../Redux/User/UserSlice";
import { useNavigate } from "react-router-dom";

function GoogleAuth() {
     const auth = getAuth(app);
     const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromGoogle = signInWithPopup(auth, provider);
      //   console.log(resultsFromGoogle)
      const res = await fetch("/server/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: (await resultsFromGoogle).user.displayName,
          email: (await resultsFromGoogle).user.email,
          googlePhotoUrl: (await resultsFromGoogle).user.photoURL,
        }),
      });
      console.log(res)
      const data = await res.json()
      console.log(data)
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        type="button"
        gradientDuoTone="pinkToOrange"
        outline
        onClick={handleGoogle}
      >
        <AiFillGoogleCircle className="w-6 h-6 mr-2" />
        Continue with Google
      </Button>
    </div>
  );
}

export default GoogleAuth;

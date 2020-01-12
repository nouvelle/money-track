import React, { useState, useEffect } from "react";
/* Component */
// import Layout from "../components/Layout";
/* firebase */
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../config/firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("useFffect");
    firebase.auth().onAuthStateChanged(user => {
      return setUser(user);
    });
  }, [user]);

  const login = () => {
    console.log("login");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };
  const logout = () => {
    console.log("logout");
    firebase.auth().signOut();
  };

  console.log("UID:" + user);
  return (
    <>
      {user ? (
        <span onClick={logout}>Google Logout</span>
      ) : (
        <span onClick={login}>Google Login</span>
      )}
    </>
  );
};

export default Login;

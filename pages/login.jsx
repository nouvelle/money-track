import React, { useState, useEffect } from "react";
/* Component */
import Layout from "../components/Layout";
/* firebase */
import firebase from "firebase/app";

const Login = props => {
  console.log(props);
  // const [user, setUser] = useState("");

  // useEffect(() => {
  //   console.log(firebase);
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user);
  //     return setUser(user);
  //   });
  // });

  const login = () => {
    console.log("login");
    const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithRedirect(provider);
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log("login!!", result);
        // props.onLogined();
      });
  };
  const logout = () => {
    console.log("logout");
    firebase.auth().signOut();
    // props.onLogouted();
  };

  return (
    <Layout page={"Login"}>
      <h1>This page is Login</h1>
      {/* <p>UID: {user && user.uid}</p> */}
      <div>
        {/* {user ? ( */}
        <button onClick={logout}>Google Logout</button>
        {/* ) : ( */}
        <button onClick={login}>Google Login</button>
        {/* )} */}
      </div>

      <style jsx>{`
        h1 {
          margin: 0;
          width: 100%;
          padding-top: 30px;
          line-height: 1.15;
          font-size: 32px;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default Login;

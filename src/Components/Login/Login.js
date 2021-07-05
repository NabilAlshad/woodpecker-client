import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./Login.css";
import { userContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: " ",
    email: " ",
  });
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        const { displayName, email } = user;
        const signedInUser = {
          name: displayName,
          email: email,
          IsSignedIn: true,
        };
        console.log(signedInUser);
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    const handleSignOut = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          const signedOutUser = {
            name: "",
            isSignedIn: false,
            email: "",
          };
          setUser(signedOutUser);
          setLoggedInUser(signedOutUser);
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    };
  };
  return (
    <div id="login" className="text-center bg-info rounded p-5">
      <button onClick={handleSignIn} className="btn btn-success rounded p-2">
        <span>
          <i class="fab fa-google p-2"></i>
        </span>{" "}
        Login with google
      </button>
    </div>
  );
};

export default Login;

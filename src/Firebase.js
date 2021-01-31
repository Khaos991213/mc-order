import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCHjt848EyLvwT4yu - V9ArNBC939iyJG4I",
  authDomain: process.env.REACT_APP_FIREASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREASE_APP_ID,
});

export const auth = app.auth();
export default app;

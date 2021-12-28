import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAtOkEe-lR_e0eAe5ZWqcAFJEWBoP3RxiI",
  authDomain: "software-project-36fc1.firebaseapp.com",
  projectId: "software-project-36fc1",
  storageBucket: "software-project-36fc1.appspot.com",
  messagingSenderId: "444322034440",
  appId: "1:444322034440:web:e5dc3da6ce3220ac0af2bd"
});
firebase.analytics();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const auth = app.auth();
export default app;
export { projectStorage, projectFirestore, timestamp };




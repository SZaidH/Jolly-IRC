// Clone of firebase.js - Should be imported in the project as "firebase" to connect the app with Google's firestore
// Functionalities used - Firestore, Firebase hosting, and Firebase Authentication
import firebase from "firebase";

const firebaseConfig = {
  // Empty strings should be filled with the config details present in the Firebase project settings
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
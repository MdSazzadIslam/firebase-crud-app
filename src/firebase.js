import * as firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

firebase.initializeApp(firebaseConfig);
export const timeRef = firebase.database.ServerValue.TIMESTAMP;
export default firebase.database();

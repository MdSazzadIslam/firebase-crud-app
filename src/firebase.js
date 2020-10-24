import * as firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyA48xX_NEEiA5qgA_7x166Fg5D_UhWZpKg",
  authDomain: "fir-crud-app-7be55.firebaseapp.com",
  databaseURL: "https://fir-crud-app-7be55.firebaseio.com",
  projectId: "fir-crud-app-7be55",
  storageBucket: "fir-crud-app-7be55.appspot.com",
  messagingSenderId: "58671337235",
  appId: "1:58671337235:web:74a82a4c17eedf4a12d4e6",
  measurementId: "G-WTS7PEPKQD",
};

firebase.initializeApp(firebaseConfig);
export const timeRef = firebase.database.ServerValue.TIMESTAMP;
export default firebase.database();

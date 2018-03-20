import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJxworjwct_0qv88NVIVNnCocy_AQXj6Y",
    authDomain: "catch-of-the-day-50d21.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-50d21.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database())

// named export
export { firebaseApp };

// default export
export default base;

// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDft6yLYK34LBp7nYPnQfy7ESqBNDrBleg",
  authDomain: "bussola-59607.firebaseapp.com",
  projectId: "bussola-59607",
  storageBucket: "bussola-59607.appspot.com",
  messagingSenderId: "709737699929",
  appId: "1:709737699929:web:f80942ac2dcb65a6796f48",
};

// Initialize Firebase
let app;
if (firebase.apps.lenght === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };

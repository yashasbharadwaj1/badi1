// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9A01vgeKIQkNhHwaFPH_3qV_SopE5VC8",
  authDomain: "badi-auth.firebaseapp.com",
  projectId: "badi-auth",
  storageBucket: "badi-auth.appspot.com",
  messagingSenderId: "927930236044",
  appId: "1:927930236044:web:7e2a3cbcbf0cb720278fa9"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export {  auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmgx5XX17f8y9KG6hid9VHf4YLCVkPlx4",
  authDomain: "clone-ce095.firebaseapp.com",
  projectId: "clone-ce095",
  storageBucket: "clone-ce095.appspot.com",
  messagingSenderId: "715046435735",
  appId: "1:715046435735:web:ede2f5b874a90663aca2d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
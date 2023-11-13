// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY-wVU1woFYLk2sXt4zyTRiEgurUt7r54",
  authDomain: "grill-bar-b3e50.firebaseapp.com",
  projectId: "grill-bar-b3e50",
  storageBucket: "grill-bar-b3e50.appspot.com",
  messagingSenderId: "1055236706928",
  appId: "1:1055236706928:web:9a4d742f5141d060e91ab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
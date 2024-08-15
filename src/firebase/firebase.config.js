// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSW3-AFmnwvlga_Iw84ZhXbIuhDf4-_SE",
  authDomain: "nextron-7.firebaseapp.com",
  projectId: "nextron-7",
  storageBucket: "nextron-7.appspot.com",
  messagingSenderId: "871189440065",
  appId: "1:871189440065:web:1601e7bd6be736350108c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
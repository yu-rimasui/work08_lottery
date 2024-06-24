// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_HbeTS1kxakhUgSb160ZaamsMjPiyuJM",
  authDomain: "work08lottery.firebaseapp.com",
  projectId: "work08lottery",
  storageBucket: "work08lottery.appspot.com",
  messagingSenderId: "657197400564",
  appId: "1:657197400564:web:d8abb7601441077d9339a1",
  measurementId: "G-HDKYVLC9JR",
};

// Firebaseアプリを初期化
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

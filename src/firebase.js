// 必要なSDKから必要な機能をインポートする
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: 使用したい Firebase プロダクトの SDK を追加する

// ウェブアプリの Firebase 構成
// Firebase JS SDK v7.20.0以降では、measurementIdはオプション
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
const auth = getAuth(app);
const db = getDatabase(app);

// dbをエクスポート
export { db, auth };

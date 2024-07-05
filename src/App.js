import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "./css/style.css";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
// Realtime Database
import { db } from "./firebase";
import { get, child, ref, push, remove, onValue } from "firebase/database";

const App = () => {
  const [numbers, setNumbers] = useState({});
  console.log(numbers);

  const fetchData = async () => {
    const dataRef = ref(db);
    try {
      const snapshot = await get(child(dataRef, "nums"));
      if (snapshot.exists()) {
        console.log("Data:", snapshot.val());
        setNumbers(snapshot.val());
      } else {
        console.log("No data");
        setNumbers({});
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Realtime Databaseにアクセス
    const dataRef = ref(db, "nums");
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setNumbers(data || {});
    });

    // コンポーネントがアンマウントされたときにリスナーを解除
    return () => unsubscribe();
  }, []);

  const addNumber = (newNum) => {
    const dataRef = ref(db, "nums");
    push(dataRef, newNum)
      .then(() => {
        console.log("データが正常に追加されました");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteNumber = (key) => {
    const dataRef = ref(db, `nums/${key}`);
    remove(dataRef)
      .then(() => {
        console.log("データが正常に削除されました");
        fetchData(); // データ削除後に再フェッチ
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPage numbers={numbers} />} />
        <Route
          path="/admin"
          element={
            <AdminPage
              numbers={numbers}
              addNumber={addNumber}
              deleteNumber={deleteNumber}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

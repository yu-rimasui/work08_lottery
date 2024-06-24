import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import { db, collection, getDocs, addDoc, deleteDoc, doc } from "./firebase";

function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    // Firestoreから番号を取得
    const fetchNumbers = async () => {
      const querySnapshot = await getDocs(collection(db, "numbers"));
      const numbersList = querySnapshot.docs.map((doc) => doc.data().number);
      setNumbers(numbersList);
    };

    fetchNumbers();
  }, []);

  const addNumber = async (newNumber) => {
    if (newNumber && !numbers.includes(newNumber)) {
      await addDoc(collection(db, "numbers"), { number: newNumber });
      setNumbers([...numbers, newNumber]);
    }
  };

  const deleteNumber = async (numberToDelete) => {
    const querySnapshot = await getDocs(collection(db, "numbers"));
    const docToDelete = querySnapshot.docs.find(
      (doc) => doc.data().number === numberToDelete
    );
    if (docToDelete) {
      await deleteDoc(doc(db, "numbers", docToDelete.id));
      setNumbers(numbers.filter((number) => number !== numberToDelete));
    }
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
}

export default App;

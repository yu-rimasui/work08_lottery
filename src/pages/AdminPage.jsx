import React, { useState } from "react";
import AdminPanel from "../components/AdminPanel";

function AdminPage() {
  const [numbers, setNumbers] = useState([]);

  const addNumber = (newNumber) => {
    setNumbers([...numbers, newNumber]);
  };

  const deleteNumber = (numberToDelete) => {
    setNumbers(numbers.filter((number) => number !== numberToDelete));
  };

  return (
    <div>
      <h1>管理画面</h1>
      <AdminPanel
        numbers={numbers}
        addNumber={addNumber}
        deleteNumber={deleteNumber}
      />
    </div>
  );
}

export default AdminPage;

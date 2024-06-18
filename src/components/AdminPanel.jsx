import React, { useState } from "react";

function AdminPanel({ numbers, addNumber, deleteNumber }) {
  const [newNumber, setNewNumber] = useState("");

  const handleAdd = () => {
    if (newNumber && !numbers.includes(newNumber)) {
      addNumber(newNumber);
      setNewNumber("");
    }
  };

  const handleDelete = (number) => {
    deleteNumber(number);
  };

  return (
    <div>
      <input
        type="number"
        value={newNumber}
        onChange={(e) => setNewNumber(Number(e.target.value))}
        placeholder="番号を入力"
      />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {numbers.map((number) => (
          <li key={number}>
            {number} <button onClick={() => handleDelete(number)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;

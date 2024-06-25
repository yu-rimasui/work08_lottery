import React, { useState } from "react";

const AdminPanel = (props) => {
  const { numbers, addNumber, deleteNumber } = props;
  // const [inputNum, setInputNum] = useState("");

  const handleAdd = () => {
    const newNumber = document.getElementById("new-number");
    console.log(newNumber.value);
    if (newNumber.value === "") {
      document.getElementById("input-error").innerText =
        "レコード番号を入力してください。";
      return;
    } else {
      document.getElementById("input-error").innerText = "";
      addNumber(newNumber.value);
      newNumber.value = "";
    }
  };

  const handleDelete = (number) => {
    deleteNumber(number);
  };

  return (
    <div>
      <input type="text" placeholder="番号を入力" id="new-number" />
      <div class="text-danger" id="input-error"></div>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {Object.keys(numbers).map((key) => (
          <li key={key}>
            {numbers[key]}
            <button key={key} onClick={() => handleDelete(key)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

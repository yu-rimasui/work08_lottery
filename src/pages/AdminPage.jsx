import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AdminPage = (props) => {
  const { numbers, addNumber, deleteNumber } = props;
  if (!numbers || typeof numbers !== "object") {
    return <div>No data</div>;
  }

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
    <div className="p-5">
      <h1 className="mb-3">管理者画面</h1>
      <Form.Control
        type="text"
        id="new-number"
        aria-describedby="passwordHelpBlock"
      />
      <div class="text-danger" id="input-error"></div>
      <div className="my-2 me-4 d-flex justify-content-end">
        <Button onClick={handleAdd} variant="outline-success">
          追加
        </Button>
      </div>
      <ul>
        {Object.keys(numbers).map((key) => (
          <li key={key}>
            {numbers[key]}
            <Button
              className="ms-3"
              size="sm"
              variant="outline-success"
              key={key}
              onClick={() => handleDelete(key)}
            >
              削除
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;

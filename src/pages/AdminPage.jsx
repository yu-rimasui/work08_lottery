import React from "react";
import AdminPanel from "../components/AdminPanel";

const AdminPage = (props) => {
  const { numbers, addNumber, deleteNumber } = props;

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
};

export default AdminPage;

import React from "react";
import UserPanel from "../components/UserPanel";

const UserPage = (props) => {
  const { numbers } = props;

  return (
    <div>
      <h1>ユーザー画面</h1>
      <UserPanel numbers={numbers} />
    </div>
  );
};

export default UserPage;

import React from "react";

const UserPanel = (props) => {
  const { numbers } = props;
  // const numbers = ["A111", "B234"];

  return (
    <div>
      <h2>番号確認</h2>
      <div className="number-grid">
        {Object.keys(numbers).map((key) => (
          <div key={key}>{numbers[key]}</div>
        ))}
      </div>
    </div>
  );
};

export default UserPanel;

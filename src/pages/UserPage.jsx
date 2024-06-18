import React, { useState, useEffect } from "react";
import NumberCard from "../components/NumberCard";

function UserPage() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    // 仮のデータ取得関数。実際にはAPIから取得する
    const fetchNumbers = () => {
      setNumbers([1, 2, 3, 45, 67, 89]);
    };
    fetchNumbers();
  }, []);

  return (
    <div>
      <h1>ユーザー画面</h1>
      <div className="number-grid">
        {numbers.map((number) => (
          <NumberCard key={number} number={number} />
        ))}
      </div>
    </div>
  );
}

export default UserPage;

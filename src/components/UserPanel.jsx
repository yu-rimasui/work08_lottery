import React, { useEffect, useState } from "react";
import NumberCard from "./NumberCard";

function UserPanel() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    // 仮のデータ取得関数。実際にはAPIから取得する
    const fetchNumbers = () => {
      // ここに実際のAPIコールを実装
      // 例えば、fetch('/api/numbers').then(response => response.json()).then(data => setNumbers(data));
      setNumbers([1, 2, 3, 45, 67, 89]); // 仮データ
    };

    fetchNumbers();
  }, []);

  return (
    <div>
      <h1>番号確認</h1>
      <div className="number-grid">
        {numbers.map((number) => (
          <NumberCard key={number} number={number} />
        ))}
      </div>
    </div>
  );
}

export default UserPanel;

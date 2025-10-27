import React, { useState } from "react"; // 🌟🌟🌟 이 구문을 추가해야 합니다! 🌟🌟🌟

function BeforeReducer() {
  const [count, setCount] = useState(0);

  const handleCountIncrease = () => {
    setCount(count + 1);
  };

  const handleCountDecrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>카운터: {count}</h2>
      <button onClick={handleCountIncrease}>+1 증가</button>
      <button onClick={handleCountDecrease}>-1 감소</button>
    </>
  );
}

export default BeforeReducer;

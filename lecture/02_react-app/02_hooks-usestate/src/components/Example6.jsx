import React, { useState } from "react";

function Example6() {
  const [inputValue, setInputValue] = useState("");
  const [animals, setAnimals] = useState([]);

  const handleAddAnimal = () => {
    // 🌟 2. 개선: 입력값 유효성 검사 추가 (빈 문자열이 아닐 때만 추가)
    if (!inputValue.trim()) {
      alert("추가할 동물을 입력해 주세요.");
      return; // 함수를 여기서 종료하여 빈 값 추가를 막습니다.
    }

    // 배열 불변성을 지켜서 새로운 항목을 추가
    setAnimals([...animals, inputValue]);

    // 입력 상태 초기화
    setInputValue("");
  };

  return (
    <>
      <h2>배열 활용</h2>
      <input
        type="text"
        placeholder="추가할 동물 입력"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* 🌟 1. 오류 해결: 버튼에 onClick 이벤트 핸들러 연결 */}
      <button onClick={handleAddAnimal}>추 가</button>

      <h5>현재 추가된 동물 목록</h5>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}> {animal} </li>
        ))}
      </ul>
    </>
  );
}

export default Example6;

import React, { useState } from "react";

function Example3() {
  const [selectedValue, setSelcetedValue] = useState("");

  // 🌟 1. 오류 해결: 이벤트 객체 (e)를 매개변수로 받도록 수정
  const handleSelectChange = (e) => {
    setSelcetedValue(e.target.value);
  };

  return (
    <>
      <h2>셀렉트박스와 state</h2>
      <select
        value={selectedValue}
        // 🌟 2. 오류 해결: onChange에 핸들러 함수를 연결
        onChange={handleSelectChange}
      >
        <option hidden value="">
          통신사 선택
        </option>

        {/* 🌟 3. 개선: option에 명시적인 value 값을 부여했습니다. */}
        <option value="SKT">선경통신</option>
        <option value="KOR">한국통신</option>
        <option value="MY019">LG019PCS</option>
      </select>
      <h5>선택값: {selectedValue} </h5>
    </>
  );
}

export default Example3;

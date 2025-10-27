import React, { useReducer } from "react"; // 🌟🌟🌟 useReducer를 추가했습니다! 🌟🌟🌟
//상태 변경 로직을 컴포넌트 외부 함수(reducer)로 관리
//state를 즉정 액션에 따라 관리

function countReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return 0;
    case "ADD":
      return state + action.payload;
    case "MINUS":
      return state - action.payload;
    default:
      return state;
  }
}

function AfterReducer() {
  const [count, dispatch] = useReducer(countReducer, 0); // [0, f] ==> 초기 state값, f는 액션을 발생시키는 함수

  return (
    <>
      <h2>카운터: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+1 증가</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-1 증가</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
      <button onClick={() => dispatch({ type: "ADD", payload: 100 })}>
        +100 증가
      </button>
      <button onClick={() => dispatch({ type: "ADD", payload: 50 })}>
        +50 증가
      </button>
      <button onClick={() => dispatch({ type: "MINUS", payload: 100 })}>
        -100 감소
      </button>
      <button onClick={() => dispatch({ type: "MINUS", payload: 50 })}>
        -50 감소
      </button>
    </>
  );
}

export default AfterReducer;

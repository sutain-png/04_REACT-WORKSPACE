import React, { useState, useEffect } from "react";

function Example4() {
  // 상태 관리 1) 타이머 시간(초)
  const [seconds, setSeconds] = useState(0);

  // 상태 관리 2) 타이머 상태
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // setup
    console.log("setup 함수 실행");
    // 타이머가 상태가 true 일 때만 1초간격마다 현대 초를 1씩 증가하느 타이머 설정
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        // setSeconds(seconds + 1);
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // 타이머 정리하지 않았을때 문제점
    // 1. 정지 상태(false)로 변경되도 현재 타이머가 멈추지 않음
    // 2. 다시 실행 상태로(true)로 변경되면 새로운 인터벌이 생김. 기존 인터벌이 남아있음. 중복생성
    // 3. 기존것은 클리어 인터벌로 제거가 필요함 => 메모리 누수가 생길 수 있음. 백그라운드에서 인터벌이 실행중.

    // cleanup함수  : 컴포넌트가 Unmount 또는 useEffcet의 setup가 다시 실행되기 "전"
    return () => {
      console.log("cleanup 함수 실행");
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <h2>TIMER</h2>
      <h3>{seconds}</h3>
      <button onClick={() => setIsRunning(true)}>시작</button>
      <button onClick={() => setIsRunning(false)}>중지</button>
      <button
        onClick={() => {
          setSeconds(0);
          setIsRunning(false);
        }}
      >
        초기화
      </button>
      <p>상태 : {isRunning ? "실행중" : "정지됨"}</p>
    </div>
  );
}

export default Example4;

matchMedia;

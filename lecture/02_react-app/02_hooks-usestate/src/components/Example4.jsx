import React, { useState } from "react";

function Example4() {
  // 1. State 초기값을 명시적으로 '' (빈 문자열)로 설정하는 것을 권장합니다.
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const handelUserIdchange = (e) => {
    setUserId(e.target.value);
  };

  const handelUserPwdChange = (e) => {
    setUserPwd(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    // 유효성 체크 로직
    if (!userId.trim() || !userPwd.trim()) {
      e.preventDefault(); // 기본 이벤트 막기
      alert("입력값이 누락되었습니다");
      return;
    }

    // 유효성 검사 성공 시: 기본 제출 막고 알림 띄우기
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 것을 막습니다.

    // 템플릿 리터럴로 사용자 입력값 출력
    alert(
      `유효성검사 통과! 로그인 제출 진행됩니다. 아이디: ${userId}, 비번: ${userPwd}`
    );
  }; // 🌟 이 중괄호가 handleLoginSubmit 함수의 끝입니다.

  // 🚨🚨🚨 불필요한 닫는 중괄호 삭제! 🚨🚨🚨

  return (
    <>
      <h2>종합예시 - 로그인 폼</h2>
      {/* onSubmit에 handleLoginSubmit 함수를 정확히 연결 */}
      <form action="/login" method="post" onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="아이디 입력"
          value={userId}
          onChange={handelUserIdchange}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호 입력"
          value={userPwd}
          onChange={handelUserPwdChange}
        />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  );
} // 🌟 이 닫는 중괄호가 Example4 함수의 최종 끝입니다.

export default Example4;

import React, { useState } from "react";

function Example5() {
  const [user, setUser] = useState({
    userId: "",
    userPwd: "",
  });

  const handleUserChange = (e) => {
    // 입력 필드에 'name' 속성이 필요합니다! (아래 JSX 수정 참고)
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    // 폼 제출 시 기본 동작 (페이지 새로고침)을 무조건 막습니다.
    e.preventDefault();

    // 1. 유효성 검사 (입력값 누락 체크)
    if (!user.userId.trim() || !user.userPwd.trim()) {
      alert("입력값이 누락되었습니다");
      return; // 실패 시 여기서 함수 종료
    }

    // 🌟 2. alert 구문을 함수 내부 (유효성 통과 후)로 이동
    alert(
      `유효성검사 통과! 로그인 제출 진행됩니다. 아이디: ${user.userId}, 비번: ${user.userPwd}`
    );

    // 이 시점에서 서버 통신 등의 로직을 추가합니다.
  }; // <--- handleLoginSubmit 함수의 끝

  // 🚨 컴포넌트 함수 본문에서 alert 코드가 삭제되었습니다.

  return (
    <>
      <h2>종합예시 - 로그인 폼</h2>

      <form onSubmit={handleLoginSubmit}>
        {" "}
        {/* action, method는 서버 통신 시 필요 */}
        <input
          type="text"
          placeholder="아이디 입력"
          name="userId" // 🌟 중요: name 속성을 추가하여 상태 객체의 키와 매칭
          value={user.userId}
          onChange={handleUserChange}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호 입력"
          name="userPwd" // 🌟 중요: name 속성을 추가하여 상태 객체의 키와 매칭
          value={user.userPwd}
          onChange={handleUserChange}
        />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
export default Example5;

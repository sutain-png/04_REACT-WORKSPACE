import React, { useState } from "react"; // React와 useState를 함께 import
import { useNavigate } from "react-router-dom";


// 다른 페이지 이동 방식이 링크 형식이 아닌 버튼이나 일반요소일 경우.
// location.href='요청할 url' === <a> (서버사이드,깜박거림발생)
function Home() {
  const [inputValue, setInputValue] = useState({
    category: "",
    id: "",
  });
  const navigate = useNavigate();

  const handleInputChage = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = () => {
    navigate(`/practice/${inputValue.category}`);
  };

  return (
    <div>
      <h5>Home</h5>
      <button onClick={() => (location.hef = "/about")}>소개페이지</button>
      <button onClick={() => navigate("profile/1")}>
        1번 회원 프로필 페이지
      </button>
      <br />
      <br />
      <div>
        카테고리 :
        <input type="text" id="category" value={inputValue.category} />
        <br />
        아이디 : <input type="text" id="id" value={inputValue.id} />
        <br />
        <button onClick={handleClick}>조회</button>
        {/* 조회 버튼 클릭 시 Practice 페이지 보여지도록 */}
      </div>
    </div>
  );
}

export default Home;

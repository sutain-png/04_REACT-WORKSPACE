import React from 'react'
import { useParams } from "react-router-dom";


// /pratice/it/2
// /pratice/it/5
// /pratice/history/1
// /pratice/art/5
// ...


function Practice() {

  const {cartegory, id} = useParams()

  return (
    <div>
      <h5>연습하기</h5>
        <p>현재 연습 카테고리는 {category}번 번호 페이지입니다.
          현재 아이디: {id}
        </p>
    </div>
  );
}




export default Practice
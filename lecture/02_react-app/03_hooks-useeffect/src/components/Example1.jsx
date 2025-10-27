import { useEffect, useState } from "react";

// 의존성 배열이 없는 경우 => (Mount와 Update)
function Example1() {

  const [now, setNow] = useState(new Date().toLocaleTimeString())

useEffect(() => {
  console.log("실행될까? 혼또니 이그젬플1 컴포넌트가 랜더링됨");

} )
// setUp 함수가 동작되는 시점
// 1. 처음 컴포넌트가 랜더링 될떄(Mount, componetDidmount
// 2. 다시 랜더링 될떄(Update, componetDiaUpdate)
  const handleNowClick = (e) => {
    setNow(new Date().toLocaleTimeString());
  }

  return (

    <div>
      <button onClick={handleNowClick}>NOW</button>
      <h2>현재 시간: {now}</h2>
    </div>
  )


}

export default Example1
import React, { useState, useEffect } from 'react'

function Example2() {
const [now, setNow] = useState(new Date().toLocaleTimeString());

useEffect(() => {
  console.log("Example2 컴포넌트가 랜더링됨")
}, [])

const handleNowClick = () => {
  setNow(new Date().toLocaleTimeString());
}
  return (
    <div>
      <button onClick={handleNowClick}>NOW</button>
      <h2>현재 시간: {now}</h2>
    </div>
  )
}

export default Example2
import React from 'react'

function StudentItem({stu}) {
  return (
    <p>
      이름: {stu.name}
      <br />
      나이: {stu.age}

    </p>
  )
}

export default StudentItem


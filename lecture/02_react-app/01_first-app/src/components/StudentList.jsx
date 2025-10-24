// rfce 단축키

import React from 'react'
import StudentItem from './StudentItem'

function StudentList() {
  const students = [
    {id:1, name: '홍길동', age:20},
    {id:2, name: '김고촌', age:30},
    {id:3, name: '이마산', age:54},
  ];
  
  
  
  return (
    <>
        <h2>StudentList</h2>
        <div>
          {
            students.map((student) => <StudentItem key={student.id} stu={student} />)
          }
        </div>
    </>

  )
}

export default StudentList
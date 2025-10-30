import React from 'react'
import {useOutletContext} from 'react-router-dom'
function Settings() {

const  {numofUsers, numOfOrders} =  useOutletContext() 


  return (
    <div> 
    <h5>대시보드 - 설정보드</h5>
    <p>유저수 : {numofUsers}</p>
    <p>주문수 : {numOfOrders}</p>
    </div>
  )
}

export default Settings
import React from 'react'
import {Outlet, Link, useOutletContext} from 'react-router-dom'


function Dashboard() {

  const dashboardData = { 
    numOfUsers: 100,
    numOfOrders: 1000
  }


  return (
    <>
      <h2>대시보드</h2>

      <div>
        <h5>대시보드 컨텐츠</h5>
        <h5>대시보드 - 설정보드</h5>
        <p>유저수 : {numofUsers}</p>
        <p>주문수 : {numOfOrders}</p>
        <Outlet context={dashboardData} />
      </div>
    </>
  );
}

export default Dashboard
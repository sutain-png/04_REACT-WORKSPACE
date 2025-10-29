import React from 'react'
import {Outlet} from 'react-router-dom'


function Dashboard() {
  return (
    <>
    <h2>대시보드</h2>

    <div>
      <h4>대시보드 컨텐츠</h4>
      <Outlet />
    </div>
    </>
  )
}

export default Dashboard
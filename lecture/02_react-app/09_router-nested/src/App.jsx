import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import React from "react";

import Settings from "../pages/Settings"; 
import Analytics from "../pages/Analytics"; // 👈 'Analytis'는 오타일 가능성이 높아 'Analytics'로 가정합니다.

function App() {

  return (
    <div>
      <nav style={{ background: "black", height: "60px", color: "white" }}>
        <Link to="/">홈</Link> | <Link to="/dashboard">대시보드</Link>
      </nav>
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="analytic" element={<Analytis />} />
        </Routes>
      </main>
    </div>
  );
}

export default App


/*
  1. 중첩 라우팅(Nested Routing)
    1) 부모 라우트 컴포넌트 안에서 자식 라우트 컴포넌트를 정의하는 방식입니다. 
    2) 중첩 경로 작성시 슬래시(/)로 시작하지 않도록 주의합니다. (중첩 경로는 부모 경로에 상대 경로로 자식 경로를 표현합니다.)

  2. <Outlet>
    1) 중첩된 라우팅 구조에서 자식 라우트 컴포넌트가 렌더링되는 위치를 지정하는 컴포넌트입니다.
    2) Outlet에 표현되는 자식 라우트 컴포넌트로 Context를 통해 데이터를 전달할 수 있습니다.
    3) 자식 라우트 컴포넌트에서는 useOutletContext() 훅을 사용하여 Context에 저장된 데이터를 읽을 수 있습니다.
*/

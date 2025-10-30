import { Link, Routes, Route } from "react-router-dom";
import React from "react";

// 🌟🌟🌟 1. 경로 오류 해결: 상대 경로(../pages/)로 수정 🌟🌟🌟
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Analytics from "../pages/Analytics"; // 파일 이름은 Analytic.jsx 이지만, 컴포넌트 이름은 Analytics로 가정

function App() {
  return (
    <div>
      <nav style={{ background: "black", height: "60px", color: "white" }}>
        <Link to="/">홈</Link> |<Link to="/dashboard">대시보드</Link>
        {/* 중첩 라우팅을 위해 자식 경로 링크 추가 */}|{" "}
        <Link to="/dashboard/settings">설정</Link> |{" "}
        <Link to="/dashboard/analytic">분석</Link>
      </nav>
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 🌟 3. 오류 해결: Dashboard를 부모 라우트로 설정 (중첩) */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* 자식 라우트들은 부모의 path(/dashboard)에 상대적으로 추가됩니다. */}
            <Route path="settings" element={<Settings />} />

            {/* 🌟 2. 오류 해결: element 이름을 import된 'Analytics'로 수정 */}
            <Route path="analytic" element={<Analytics />} />

            {/* 부모 라우트가 path="/dashboard"로 끝나는 경우, index 라우트도 정의할 수 있습니다. */}
            {/* <Route index element={<h1>대시보드 초기 화면</h1>} /> */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

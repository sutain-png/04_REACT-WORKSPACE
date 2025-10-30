import { Routes, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menus from "./pages/Menus";
import MenuDetail from "./pages/MenuDetail";
import MenuSearchResult from "./pages/MenuSearchResult";
import router from "./routes/router";

// 메인페이지  MainLayout + Oulet(Home)
// /about 소개페이지  MainLayout + Oulet(About)
// /menus 메뉴목록페이지 MainLayout + Oulet(Menus)
// /menus/:id 메뉴상세페이지 MainLayout + Oulet(MenuDetail)
// /meuns/search 메뉴검색결과페이지 MainLayout + Oulet(MenuSearch)

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menus">
            <Route index element={<Menus />} />
            <Route path=":id" element={<MenuDetail />} />
            <Route path="search" element={<MenuSearchResult />} />
          </Route>
        </Route>
      </Routes> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

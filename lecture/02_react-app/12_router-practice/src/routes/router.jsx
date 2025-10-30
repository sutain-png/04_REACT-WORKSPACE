import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import MenuSearchResult from "../pages/MenuSearchResult";

import Home from "../pages/Home";
import Menus from "../pages/Menus";
import MenuDetail from "../pages/MenuDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // 🛑 1번 오류 해결: children은 라우트 객체들의 배열 [ ]입니다.
    children: [
      {
        // 🛑 2번 오류 해결: JSX 문법 수정
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menus",
        children: [
          {
            // 🛑 2번 오류 해결: JSX 문법 수정
            index: true,
            element: <Menus />,
          },
          {
            // 💡 동적 라우트 매개변수는 ':'를 사용해야 합니다.
            // path: 'id'가 아닌 path: ':id'로 수정했습니다.
            path: ":id",
            element: <MenuDetail />,
          },
          {
            path: "search",
            element: <MenuSearchResult />,
          },
        ],
      },
    ],
  },
]);

export default router; // router 객체를 내보내야 main.jsx에서 사용할 수 있습니다.

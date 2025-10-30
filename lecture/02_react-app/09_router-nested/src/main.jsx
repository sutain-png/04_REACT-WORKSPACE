import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react"; // 🌟 React 컴포넌트들은 상단에 import 되어야 합니다.
import { createRoot } from "react-dom/client"; // 🌟 React DOM 함수들도 import 되어야 합니다.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

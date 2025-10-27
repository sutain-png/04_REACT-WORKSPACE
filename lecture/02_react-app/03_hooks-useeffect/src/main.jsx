import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)


// * StrictMode
// - 리엑트의 잠재적인 문제를 조기에 발견할 수 있는 개발 전용 도구.
// - strictMode의 하위 컴포넌트에 대해 추가적인 검사와 경고기능이 활성화(개발 화면환경에서만)

import React, { useState, useEffect } from 'react';
import MenuList from '../components/MenuList';
import { getMenus } from '../api/MenuAPI';
import MenuSearchForm from '../components/MenuSearchForm';

// 메뉴 목록 페이지용 컴포넌트
function Menus() {
  const [menus, setMenus] = useState([]);


    useEffect(() => {
      setMenus(getMenus());
    }, []);


  return (
   <>
   <h3>메뉴 목록 페이지</h3>
   {/* 검색폼 */}
   <MenuSearchForm />
   
   {/* 목록 컴포넌트 */}
   <MenuList menus={menus} />
   </>
  );
}

export default Menus;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuAPI";

// 특정 메뉴의 상세페이지용 컴포넌트
// /menus/:id

function MenuDetail() {
  const [menu, setMenu] = useState();
  const { id } = useParams(); // {id: "xx"}

  useEffect(() => {
    setMenu(getMenuDetail(id));
  }, []);

  return (
    <>
      <h3>메뉴 상세 페이지</h3>

      {menu ? (
        <div>
          <h4>메뉴명: {menu.menuName}</h4>
          <img src={menu.detail.image} alt={menu.menuName} width="300px" />
          <h4>가격: {menu.menuPrice.toLocaleString()}원</h4>
          <h4>카테고리: {menu.categoryName}</h4>
          <h4>주문가능여부: {menu.isOrderable ? "가능" : "불가능"}</h4>
          <h4>상세설명: {menu.detail.description}</h4>
        </div>
      ) : (
        // 2번 오류 해결: 로딩 중 메시지
        <div>메뉴 정보가 없어요 다시 확인해주세요...</div>
      )}
    </>
  );
}

export default MenuDetail;

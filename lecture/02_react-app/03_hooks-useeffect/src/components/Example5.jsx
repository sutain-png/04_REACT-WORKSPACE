import React, { useState, useEffect } from "react";

function Example5() {
  // 1. 상태를 하나로 정리하고 초기값을 빈 배열로 설정
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) 
      .then((jsonData) => setPosts(jsonData));

  }, []); 

  return (
    <>
      {" "}
      <h2>전체 게시글 목록 ({posts.length}개)</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Example5;

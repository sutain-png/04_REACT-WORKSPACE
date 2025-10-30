import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Info() {
const [searchParams] = useSearchParams();

  const name = searchParams.get("name") || "Guest";
  const age = searchParams.get("age") || 0;

  return (
    <div>
      <h5>Info 페이지</h5>
      <p>
        welcome {name}!
        {age > 0 && `You are ${age} years old.`}
      </p>
    </div>
  )
}

export default Info

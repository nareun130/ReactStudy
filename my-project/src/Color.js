// import React from "react";
import StarRating from "./StarRating";

export default function Color({ title, color, rating }) {
  //ColorList에서 구조분해해서 props를 보내 줬기 때문에 바로 쓸 수 있다.
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating selectedStars={rating} />
    </section>
  );
}

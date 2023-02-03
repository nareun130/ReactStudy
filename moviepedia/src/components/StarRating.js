import { useState } from 'react';
import { createArray } from './lib';
import Star from './Star';

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  const [stars, setStars] = useState(selectedStars);
  //! 별 클릭 했을 때 바뀌도록 해보기
  return (
    <>
      {
        //n개 만큼 star를 만든다.
        //^i = 0,1,2,3,4 ,if selectedStars : 3 -> i : 0,1,2  => 총 3개 생성
        createArray(totalStars).map((n, i) => (
          <Star key={i} selected={stars > i} onSelect={() => setStars(i + 1)} />
        ))
      }
    </>
  );
}

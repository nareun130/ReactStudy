import React, { useState } from "react";
import Star from "./Star";
import { createArray } from "./lib";

export default function StarRating_org({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

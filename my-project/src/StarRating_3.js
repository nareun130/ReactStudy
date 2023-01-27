import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = length => [...Array(length)];

const Star = ({selected = false}) => (
    <FaStar color={selected ? "red" : "grey"} />
)

export default function StarRating_3({ totalStars = 5}) {
    const [selectedStars] = useState(3);
    return (
        <>
            { createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars>i}/>)) 
                // 3  > 0  true    "red"
                // 3  > 1  true    "red"
                // 3  > 2  true    "red"
                // 3  > 3  false   "grey"       
            }
        </>
    ) 
    
}
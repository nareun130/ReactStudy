import React from "react";
import { FaStar } from "react-icons/fa";

const createArray = length => [...Array(length)];

const Star = ({selected = false}) => (
    <FaStar color={selected ? "red" : "grey"} />
)

export default function StarRating_2({ totalStars = 5}) {
    return createArray(totalStars).map((n, i) => <Star key={i} />);
}
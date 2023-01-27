import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";

export default function App() {
  const [colors] = useState(colorData); //colorData의 배열객체를 받아온다.
//   const colors = useState(colorData); // Array(3),f 이렇게 받아옴.
//   console.log(colors);
  return <ColorList colors={colors} />;
}

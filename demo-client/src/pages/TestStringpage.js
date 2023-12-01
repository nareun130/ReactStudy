import { useState } from "react";
import { fetcthString } from "../common/api/TestApi";

export const TestStringPage = () => {
  const [test, setTest] = useState("");

  const getString = async () => {
    await fetcthString()
      .then((response) => {
        console.log(response);
        setTest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p>{test}</p>
      <button type="button" onClick={getString}>
        전송
      </button>
    </div>
  );
};

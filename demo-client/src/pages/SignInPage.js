import { useState } from "react";
import { login } from "../common/api/AuthApi";

export const SignInPage = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    login(values)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("tokenType", response.tokenType);
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        window.location.href = `/home`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">아이디</label>
            <input type="text" id="username" onChange={handleChange} value={values.username} />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input type="text" id="password" onChange={handleChange} value={values.password} />
          </div>
          <div>
            <button type="submit"> 로그인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

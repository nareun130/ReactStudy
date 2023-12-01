import { useState } from "react";
import { signUp } from "../common/api/AuthApi";

export const SignUpPage = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    contact: "",
    email: "",
  });
  const handleChange = async (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
     await signUp(values)
    //   .then((response) => {
    //     window.location.href = `/login`;
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <div>
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
            <label htmlFor="contact">연락처</label>
            <input type="text" id="contact" onChange={handleChange} value={values.contact} />
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" onChange={handleChange} value={values.email} />
          </div>
          <div>
            <button type="submit">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

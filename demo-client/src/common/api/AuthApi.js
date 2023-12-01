import axios from "axios";
import { apiClient } from "../client/ApiClient";
//? 밑의 둘
const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");

export const AuthApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
  },
});

//* login API
export const login = async ({ username, password }) => {
  const data = { username, password };
  const response = await AuthApi.post(`/api/v1/auth/login`, data);
  return response.data;
};

//* SIGNUP API
export const signUp = async ({ username, password, email, contact }) => {
  console.log("접속", username,password,email,contact);
  const data = { username, password, email, contact };
  console.log(data);

  // console.log(data);
  const response = await AuthApi.post("/api/v1/auth/signup", data);
  
  // return response.data;
  console.log(response);
};

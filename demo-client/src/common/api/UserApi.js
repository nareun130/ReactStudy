import axios from "axios";
const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");
let REFRESH_TOKEN = localStorage.getItem("refreshToken");
export const UserApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
    //! TOKEN_TYPE 없는 것을 유의
    REFRESH_TOKEN: REFRESH_TOKEN,
  },
});
//* 토큰 갱신
const refreshAccessToken = async () => {
  const response = await UserApi.get(`/api/v1/auth/refresh`);
  ACCESS_TOKEN = response.data;
  localStorage.setItem("accessToken", ACCESS_TOKEN);
  UserApi.defaults.headers.common["Authorization"] = `${TOKEN_TYPE} ${ACCESS_TOKEN}`;
};

//* 토큰 유효성 검사
//~>UserApi의 응답을 가로채 intercept 에러코드를 확인
UserApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    //? 401 : 로그인 x, 403 : 로그인했지만 AccessToken 유효 x
    if (error.response.status === 403 && !originalRequest._retry) {
      await refreshAccessToken();
      return UserApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

//* 회원조회 API
export const fetchUser = async () => {
  const response = await UserApi.get("/api/v1/uesr");
  return response.data;
};

//* 회원수정
export const updateUser = async (data) => {
  const response = await UserApi.put(`/api/v1/user`, data);
  return response.data;
};

//*회원탈퇴
export const deleteUser = async () => {
  await UserApi.delete("/api/v1/user");
};

import axios from "axios";

/** 헤더에 토큰을 첨부하는 axios 인스턴스 */
export const axiosBase = axios.create({
  baseURL: `http://${window.location.hostname}:5000/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

/** 일반 axios 인스턴스 */
export const axiosBaseWithToken = axios.create({
  baseURL: `http://${window.location.hostname}:5000/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

// Axios 인스턴스 생성
const baseApi = axios.create({
  baseURL: `http://${window.location.hostname}:9999/`,
});

// 요청 Interceptor
baseApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      // 요청 헤더에 accessToken 추가
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 Interceptor
baseApi.interceptors.response.use(
  // accessToken이 유효한 경우 요청을 정상적으로 보내줌
  (response) => {
    return response;
  },
  // accessToken이 만료된 경우 refreshToken을 이용해 갱신 시도
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");

    // accessToken 갱신이 필요한 상황
    if (
      // refreshToken이 유효해야 함
      refreshToken &&
      // accessToken이 만료되면 서버는 401 Unauthorized 응답을 반환함
      error.response.status === 401 &&
      // 이전 요청에서 갱신시도가 아직 이루어지지 않은 경우
      !originalRequest._retry
    ) {
      // accessToken 갱신을 진행할 경우 중복 갱신 요청 방지
      originalRequest._retry = true;

      try {
        // refresh token을 사용하여 새로운 accessToken 요청
        const response = await axios.post("/refresh-token", {
          refreshToken: refreshToken,
        });

        // 응답으로부터 새로운 accessToken 추출 후 저장
        const newAccessToken = response.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        // 이전 요청에 새로운 accessToken을 추가하여 재시도
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // 재시도한 요청 반환
        return axios(originalRequest);
      } catch (error) {
        // refreshToken을 활용한 갱신에 실패하는 경우,
        // 로그인이 필요한 요청은 로그인 페이지로 유도
        const loginRequiredPage =
          window.location.pathname.startsWith("/login") ||
          window.location.pathname.startsWith("/:userId");
        if (loginRequiredPage) {
          // 로그인 페이지로 리디렉션
          window.location.href = "/login";
          return Promise.reject("Unauthorized");
        }
        // logout();
      }
    }

    return Promise.reject(error);
  }
);

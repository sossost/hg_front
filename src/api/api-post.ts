import { axiosBase } from "./api";

// export const getAllPosts = () => {
//   const data = basicApi.get("posts");
//   return data;
// };

export const getAllPosts = () => {
  axiosBase.interceptors.response.use(
    (response) => response,
    (error) => {
      // 이 부분에서 공통적인 에러 핸들링을 해주시면 됩니다.
      throw error;
    }
  );

  return axiosBase;
};

export const getPostById = (postId: string | undefined) => {
  return {};
};

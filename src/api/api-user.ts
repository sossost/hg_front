import { baseApi } from "./api";

export const updateUserProfile = async (nickName: string, intro: string) => {
  const reponse = await baseApi.put("/api/v1/users/update/profile", {
    nickName,
    intro,
  });
  return reponse;
};

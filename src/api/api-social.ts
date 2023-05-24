import { baseApi } from "./api";

export const newFollower = async (targetName: string) => {
  const response = await baseApi.post("/api/v1/follows/add", { targetName });
  return response;
};

export const deleteFollower = async (targetName: string) => {
  const response = await baseApi.delete("/api/v1/follows/delete", {
    data: targetName,
  });
  return response;
};

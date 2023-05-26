import { baseApi } from "./api";

export const uploadImage = async (formData: any) => {
  console.log(formData.get("image"));
  const response = await baseApi.post("v1/images/minio", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return "http://tripsketch.duckdns.org:9000/" + response.data.data.image_url;
};

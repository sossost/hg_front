import { axiosBaseWithToken } from "./api";

/** 로컬스토리지에 저장된 토큰에 해당하는 유저데이터 요청 */
export const getUserDataByToken = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken !== null) {
    // @@@ 민석님이랑 대화 후 아래 주소 수정 예정
    const data = await axiosBaseWithToken.get(`api/users/auth/verifyToken`);
    return data.data;
  } else {
    return null;
  }
};

/** 로컬스토리지에 저장된 토큰에 해당하는 유저데이터 삭제 요청 */
export const deleteUserDataByToken = async () => {
  if (localStorage.getItem("accessToken")) {
    const data = await axiosBaseWithToken.delete("api/users/");
    return data.data;
  } else {
    return;
  }
};

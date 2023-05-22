import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// 아이디 찾기 페이지 폼 타입 정의
type FormData = {
  userEmail: string;
};

/** 유저 아이디 정보 가져오기
 * 이메일 입력시 아이디 안내 문구 표시
 */
const fetchUserId = async (userEmail: FormData) => {
  try {
    const response = await axios.post("/api/users/", { userEmail });
    const userId = response.data.userId;
    return userId;
  } catch (error) {
    console.log(error);
  }
};

/** 아이디 찾기 페이지 */
const FindUserIdPage: React.FC = () => {
  // react-hook-form 라이브러리의 기능을 활용하여 폼 처리
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  // 임시 비밀번호 정상 발급 후 띄워주는 문구와 색상
  const [resetMessage, setResetMessage] = useState("");
  const [resetMessageColor, setResetMessageColor] = useState("");

  /** 이메일 입력시 아이디 요청 핸들러 */
  const submitHandler = async (data: FormData) => {
    try {
      const response = await axios.get("/api/find-userid");
      if (response.status === 200) {
        setResetMessage(`고객님의 아이디는 ${fetchUserId}입니다.`);
        setResetMessageColor("#167DD8");
      } else {
        setResetMessage(`이메일을 다시 한 번 확인해주세요.`);
        setResetMessageColor("#F14546");
      }
    } catch (error) {
      console.log(error);
      setResetMessage("서버 오류로 아이디 찾기에 실패했습니다.");
      setResetMessageColor("#F14546");
    }
  };

  const navigate = useNavigate();
  /** 로그인 페이지로 연결해주는 핸들러 */
  const loginClickHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 아이디 찾기 Title*/}
        <div className="mb-[50px] mt-[50px]">
          <h1 className="text-[30px] font-[600]">아이디 찾기</h1>
        </div>

        {/* 가입한 이메일 입력칸 */}
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="flex flex-col">
            <input
              className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px] rounded-[10px]
              focus:outline-[#167DD8] focus:outline-[2px]"
              placeholder="이메일을 입력해주세요"
              {...register("userEmail", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.userEmail?.type === "required" && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                이메일을 입력해주세요.
              </span>
            )}
            {errors.userEmail?.type === "pattern" && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                유효한 이메일 주소를 입력해주세요.
              </span>
            )}
          </div>

          {/* 아이디 찾기 버튼 */}
          <div>
            <button
              type="submit"
              className="p-[10px] bg-[#73BBFB] text-[#FFFFFF]
              w-[300px] h-[55px] rounded-[10px] text-[18px] mt-[15px] mb-[10px]"
            >
              아이디 찾기
            </button>
          </div>
        </form>

        {/* 아이디 찾기 완료 후 실행 결과 출력 */}
        {resetMessage && (
          <p className="text-[14.5px]" style={{ color: resetMessageColor }}>
            {resetMessage}
          </p>
        )}

        {/* 로그인 하러 가기 버튼 */}
        <div>
          <Link to="/login" onClick={loginClickHandler}>
            <button
              type="submit"
              className="p-[10px] bg-[#FFFFFF] text-[#167DD8] border-[#167DD8] border-[2px]
              w-[300px] h-[55px] rounded-[10px] text-[18px] mt-[35px] mb-[10px]
              hover:bg-[#167DD8] hover:text-[#FFFFFF] hover:border-[#167DD8]"
            >
              로그인 하러 가기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FindUserIdPage;

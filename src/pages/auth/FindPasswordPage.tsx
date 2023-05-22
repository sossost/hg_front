import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// 비밀번호 찾기 페이지 폼 타입 정의
type FormData = {
  userId: string;
};

/** 유저 이메일 정보 가져오기
 * 비밀번호 찾기 완료시 안내 문구에 함께 띄워줄 것임
 */
const fetchUserEmail = async (userId: FormData) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    const userEmail = response.data.email;
    return userEmail;
  } catch (error) {
    console.log(error);
  }
};

/** 비밀번호 찾기 페이지 */
const FindPasswordPage: React.FC = () => {
  // react-hook-form 라이브러리의 기능을 활용하여 폼 처리
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  // 임시 비밀번호 정상 발급 후 띄워주는 문구와 색상
  const [resetMessage, setResetMessage] = useState("");
  const [resetMessageColor, setresetMessageColor] = useState("");

  /** 아이디 입력시 임시 비밀번호 발급 요청 핸들러 */
  const submitHandler = async (data: FormData) => {
    try {
      const response = await axios.post("/api/reset-password", {
        userId: data.userId,
      });
      if (response.status === 200) {
        setResetMessage(`임시 비밀번호를 ${fetchUserEmail}로 발급했습니다.`);
        setresetMessageColor("#167DD8");
      } else {
        setResetMessage("아이디를 다시 한 번 확인해주세요");
        setresetMessageColor("#F14546");
      }
    } catch (error) {
      console.log(error);
      setResetMessage("서버 오류로 임시 비밀번호 발급에 실패했습니다.");
      setresetMessageColor("#F14546");
    }
  };

  const navigate = useNavigate();
  /** 로그인 하러 가기 버튼 클릭시 로그인 페이지로 연결해주는 핸들러 */
  const loginClickHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 비밀번호 찾기 Title*/}
        <div className="mb-[50px] mt-[50px]">
          <h1 className="text-[30px] font-[600]">비밀번호 찾기</h1>
        </div>

        {/* 가입한 아이디 입력칸 */}
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="flex flex-col">
            <input
              className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px] rounded-[10px]
              focus:outline-[#167DD8] focus:outline-[2px]"
              placeholder="아이디를 입력해주세요"
              {...register("userId", {
                required: "아이디를 입력해주세요",
                minLength: {
                  value: 4,
                  message: "아이디는 최소 4자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 20,
                  message: "아이디는 최대 20자까지 허용됩니다.",
                },
                pattern: {
                  value: /^[a-z0-9_]+$/,
                  message:
                    "아이디는 영문 소문자, 숫자, 언더스코어(_)만 허용됩니다.",
                },
              })}
              maxLength={20}
            />
            {errors.userId && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                {errors.userId.message}
              </span>
            )}
          </div>

          {/* 임시 비밀번호 발급 버튼 */}
          <div>
            <button
              type="submit"
              className="p-[10px] bg-[#73BBFB] text-[#FFFFFF]
              w-[300px] h-[55px] rounded-[10px] text-[18px] mt-[15px] mb-[10px]"
            >
              임시 비밀번호 발급
            </button>
          </div>
        </form>

        {/* 비밀번호 찾기 버튼 완료 후 실행 결과 출력 */}
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

export default FindPasswordPage;

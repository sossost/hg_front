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
const SignUpCompletePage: React.FC = () => {
  const navigate = useNavigate();
  /** 로그인 페이지로 연결해주는 핸들러 */
  const loginClickHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 아이디 찾기 Title*/}
        <div className="flex flex-col items-center justify-centermb-[50px] mt-[50px]">
          <img
            src="/checkmark.svg"
            alt="checkmark"
            className="h-[50px] my-[30px]"
          />
          <h1 className="text-[30px] font-[600] text-[#545454]">회원가입이</h1>
          <h1 className="text-[30px] font-[600] text-[#545454]">
            완료되었습니다
          </h1>
        </div>

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

export default SignUpCompletePage;

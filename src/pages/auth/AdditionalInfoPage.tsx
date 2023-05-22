import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// 프로필 완성 페이지 폼 타입 정의
type FormData = {
  userName: string;
  nickname: string;
};

/** 프로필 완성 페이지 */
const AdditionalInfoPage: React.FC = () => {
  // react-hook-form 라이브러리의 기능을 활용하여 폼 처리
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  /** 아이디, 닉네임 입력시 서버 등록 요청 핸들러
   * 아이디 : userName, 닉네임 : nickname
   */
  const submitHandler = async (data: FormData) => {
    try {
      // 서버에 데이터를 저장하는 중으로 상태 변경
      setIsSaving(true);
      setSaveError("");

      // 서버로 데이터 전송
      const response = await axios.post("/api/additional-info", data);

      // 성공적으로 저장된 경우
      if (response.status === 200) {
        // ## 저장 완료 메시지 표시
        console.log("데이터가 성공적으로 저장되었습니다.");
      }
    } catch (error) {
      // 저장 실패 시 에러 처리
      setSaveError("데이터 저장에 실패했습니다. 다시 시도해주세요.");
      console.log(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 추가 정보 입력 Title*/}
        <div className="mb-[50px] mt-[50px]">
          <h1 className="text-[30px] font-[600]">추가 정보 입력</h1>
        </div>

        {/* 아이디, 닉네임, 회원가입 완료하기 버튼 */}
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col justify-center items-center gap-5"
        >
          {/* 아이디 입력 */}
          <div className="flex flex-col">
            <label className="mb-[5px]">아이디</label>
            <input
              className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px] rounded-[10px] mb-[5px]
              focus:outline-[#167DD8] focus:outline-[2px]"
              {...register("userName", {
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
            {errors.userName && (
              <span className=" text-[14.5px] text-[#167DD8]">
                {errors.userName.message}
              </span>
            )}
          </div>

          {/* 닉네임 입력 */}
          <div className="flex flex-col">
            <label className="mb-[5px]">닉네임</label>
            <input
              {...register("nickname", {
                required: "닉네임은 필수 입력입니다.",
                maxLength: {
                  value: 15,
                  message: "닉네임은 최대 15자까지 가능합니다.",
                },
              })}
              className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px]  rounded-[10px] mb-[5px]
              focus:outline-[#167DD8] focus:outline-[2px]"
              maxLength={15}
            />
            {errors.nickname && (
              <span className="text-[14.5px] text-[#167DD8]">
                {errors.nickname.message}
              </span>
            )}
          </div>

          {/* 회원가입 완료하기 버튼 */}
          <div>
            <button
              type="submit"
              className="p-[10px] bg-[#73BBFB] text-[#FFFFFF]
              w-[300px] h-[55px] rounded-[10px] text-[18px] mt-[15px] mb-[10px]"
            >
              회원가입 완료하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdditionalInfoPage;

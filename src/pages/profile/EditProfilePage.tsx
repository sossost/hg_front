import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import BackBtn from "../../components/UI/BackBtn";
import InputResetIcon from "../../assets/inputResetIcon.png";
import CheckIcon from "../../assets/checkIcon.png";

type FormValue = {
  userName: string;
  introduction: string;
};

const EditProfilePage = () => {
  const {
    // register : 폼 요소들을 react-hook-form에 등록하는 데 사용됨
    register,
    // handleSubmit : 각 폼 요소에 대한 입력 유효성 검사 및 제출 처리
    handleSubmit,
    // formState : 폼 상태 정보 담음
    formState: { isSubmitting, isDirty, errors },
    reset,
  } = useForm<FormValue>();

  const userProfile = { userName: "", introduction: "" };
  const { userName, introduction } = userProfile;

  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [userNameCount, setUserNameCount] = useState(0);
  const [introductionCount, setIntroductionCount] = useState(0);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const profileImageUploadHandler = () => {
    if (
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files[0]
    ) {
      const file = fileInputRef.current.files[0];
      console.log(file); // 선택된 파일 정보를 콘솔에 출력

      const formData = new FormData();
      formData.append("file", file);

      //업로드 처리

      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result as string;
        setUploadedImageUrl(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  /** 닉네임의 글자수를 실시간으로 카운팅하는 핸들러 */
  const userNameCountChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserNameCount(e.target.value.length);
  };

  /** 자기소개의 글자수를 실시간으로 카운팅하는 핸들러 */
  const introductionCountChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIntroductionCount(e.target.value.length);
  };

  /** 프로필 폼 제출 핸들러 */
  const onSubmitHandler = (data: FormValue) => {
    const payload = {
      userName: data.userName,
      introduction: data.introduction,
    };

    try {
      //엑시오스
    } catch (err) {}
  };

  return (
    <div className="flex flex-col items-center px-[20px] py-[15px] w-full desktop:w-[1024px] gap-[20px]">
      <form
        className="flex flex-col gap-[15px] w-full h-full h-screen mobile:w-[768px]"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <BackBtn />
            <h1 className="font-medium">프로필 변경</h1>
          </div>
          <button type="submit" disabled={isSubmitting}>
            <img src={CheckIcon} alt="CheckIcon" className="h-[16px]" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <img
            className="w-[100px] h-[100px] object-cover rounded-full"
            src={uploadedImageUrl ? uploadedImageUrl : "/123.jpeg"}
            alt={
              uploadedImageUrl ? `${userName}'s profile image` : "default image"
            }
          />
          <span onClick={() => fileInputRef.current?.click()}>사진 수정</span>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={profileImageUploadHandler}
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="flex flex-col">
            <div className="flex justify-between items-center w-full py-[3px] border-b">
              <input
                defaultValue={userName}
                type="text"
                placeholder="닉네임 입력"
                className="flex-grow outline-none"
                maxLength={20}
                // 접근성을 위한 속성으로, 입력 필드의 유효성 검사 상태를 나타냄
                aria-invalid={
                  !isDirty ? undefined : errors.userName ? "true" : "false"
                }
                // 1번째 매개변수 : userid라는 이름으로 입력 요소를 등록
                // 2번재 매개변수 : 유효성 검사 규칙이 포함된 객체가 전달됨
                {...register("userName", {
                  required: "닉네임을 입력해주세요.",
                  minLength: {
                    value: 4,
                    message: "닉네임은 최소 4자 이상이어야 합니다.",
                  },
                  maxLength: {
                    value: 20,
                    message: "닉네임은 최대 20자까지 허용됩니다.",
                  },
                  pattern: {
                    value: /^[a-z0-9_]+$/,
                    message:
                      "닉네임은 영문 소문자, 숫자, 언더스코어(_)만 허용됩니다.",
                  },
                })}
                onChange={userNameCountChangeHandler}
              />

              <div
                className="flex justify-end items-center w-[24px] h-[24px]"
                onClick={() => {
                  reset();
                  setUserNameCount(0);
                }}
              >
                <img
                  src={InputResetIcon}
                  alt="input_reset_icon"
                  className="w-[14px] h-[14px]"
                />
              </div>
            </div>
            <div className="text-[14px]">
              {errors.userName && (
                <span className="float-left text-[rgb(255,0,0,0.5)]">
                  {errors.userName.message?.toString()}
                </span>
              )}
              <span className="float-right text-[rgb(210,210,210)]">
                {userNameCount}/20
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center w-full py-[5px] border-b">
              <input
                defaultValue={introduction}
                type="text"
                className="flex-grow outline-none"
                placeholder="소개 입력"
                {...register("introduction", {})}
                onChange={introductionCountChangeHandler}
              />
              <div
                className="flex justify-end items-center w-[24px] h-[24px]"
                onClick={() => {
                  reset();
                  setIntroductionCount(0);
                }}
              >
                <img
                  src={InputResetIcon}
                  alt="input_reset_icon"
                  className="w-[14px] h-[14px]"
                />
              </div>
            </div>
            <div className="flex justify-end text-[rgb(210,210,210)] text-[14px]">
              <span>{introductionCount}/60</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;

import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// 입력 데이터 형식 지정
type FormData = {
  userid: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  email: string;
};

const SignUpPage: React.FC = () => {
  // react-hook-form 라이브러리의 기능을 활용하여 폼 처리
  const {
    handleSubmit,
    // register : 폼 요소들을 react-hook-form에 등록하는 데 사용됨
    register,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmitHandler = (data: FormData) => {
    axios
      .post("/api/signup", data)
      .then((response) => {
        // 회원가입 성공 시 회원가입 완료 페이지로 이동
        if (response.status === 200) {
          console.log("회원가입이 성공적으로 완료되었습니다.");
          navigate("/api/signup_complete");
        } else {
          console.log("회원가입에 실패했습니다.");
        }
      })
      .catch((error) => {
        // 회원가입 실패 처리 로직
        console.error("회원가입 중 오류가 발생했습니다.", error);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 회원가입 Title*/}
        <div className="mb-[15px] mt-[50px]">
          <h1 className="text-[30px] font-[600]">회원가입</h1>
        </div>

        {/* SNS 계정 회원가입 */}
        <div className="flex flex-col mb-[20px] justify-center items-center">
          <span className="text-[17px] font-[600] mb-[10px] text-[#1E5A8F]">
            SNS계정으로 간편하게 회원가입
          </span>
          <div className="flex space-x-[10px]">
            <img
              src="/google-auth-logo.png"
              alt="google-auth-logo"
              className="h-[50px]"
            />
            <img
              src="/kakao-auth-logo.png"
              alt="kakao-auth-logo"
              className="h-[50px]"
            />
            <img
              src="/naver-auth-logo.png"
              alt="naver-auth-logo"
              className="h-[50px]"
            />
          </div>
        </div>

        {/* 아이디, 비밀번호, 비밀번호 확인, 닉네임, 이메일, 회원가입 버튼 */}
        <form
          className="flex flex-col justify-center items-center gap-5"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          {/* 아이디 입력 */}
          <div className="flex flex-col">
            <label className="mb-[5px]">아이디</label>
            <input
              className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px]  rounded-[10px]
              focus:outline-[#167DD8] focus:outline-[2px]"
              {...register("userid", {
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
            />
            {errors.userid && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                {errors.userid.message}
              </span>
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div className="flex flex-col">
            <label className="mb-[5px]">비밀번호</label>
            <input
              type="password"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 20,
                  message: "비밀번호는 최대 20자까지 가능합니다.",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "비밀번호는 영문자와 숫자를 조합하여 입력해야 합니다.",
                },
              })}
              className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px]  rounded-[10px]
              focus:outline-[#167DD8] focus:outline-[2px]"
            />
            {errors.password && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div className="flex flex-col">
            <label className="mb-[5px]">비밀번호 확인</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
              className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px]  rounded-[10px]
              focus:outline-[#167DD8] focus:outline-[2px]"
            />
            {errors.confirmPassword?.type === "required" && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                비밀번호 확인을 입력해주세요.
              </span>
            )}
            {errors.confirmPassword?.type === "validate" && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                비밀번호가 일치하지 않습니다.
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
              w-[300px] h-[55px]  rounded-[10px]
              focus:outline-[#167DD8] focus:outline-[2px]"
            />
            {errors.nickname && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                {errors.nickname.message}
              </span>
            )}
          </div>

          {/* 이메일 입력 */}
          <div className="flex flex-col">
            <label className="mb-[5px]">이메일</label>
            <input
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px]  rounded-[10px]
              focus:outline-[#167DD8] focus:outline-[2px]"
            />
            {errors.email?.type === "required" && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                이메일을 입력해주세요.
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                유효한 이메일 주소를 입력해주세요.
              </span>
            )}
          </div>

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="p-[10px] bg-[#73BBFB] text-[#FFFFFF]
              w-[300px] h-[55px] rounded-[10px] text-[18px]"
          >
            회원가입
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;

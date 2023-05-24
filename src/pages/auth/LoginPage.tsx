import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRecoilState } from "recoil";
import { isLoggedInState, userDataState } from "../../store/recoilAtoms";
import { baseApi } from "../../api/api";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [userData, setUserData] = useRecoilState(userDataState);

  // 입력 데이터 형식 지정
  type FormData = {
    userName: string;
    password: string;
  };

  // react-hook-form 라이브러리의 기능을 활용하여 폼 처리
  const {
    // register : 폼 요소들을 react-hook-form에 등록하는 데 사용됨
    register,
    // handleSubmit : 각 폼 요소에 대한 입력 유효성 검사 및 제출 처리
    handleSubmit,
    // formState : 폼 상태 정보 담음
    formState: { isDirty, errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  // 로그인 버튼 눌렀을 때 동작 정의
  const onSubmitHandler = async (data: FormData) => {
    // const userdata1 = { email: "wow@naver.com", id: 1, name: "lsh" };
    // setUserData(() => userdata1);
    setIsLoggedIn(true);

    try {
      // 서버로 전송할 데이터 설정
      const payload = {
        userName: data.userName,
        password: data.password,
      };

      // 로그인 요청 보내기
      const response = await baseApi.post("/v1/auths/login", payload);
      if (response) {
        alert("로그인이 완료되었습니다!");
        navigate("/");
      }

      // Access token, Refresh token 발급 후 로컬스토리지에 저장
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 로그인 Title*/}
        <div className="mb-[15px] mt-[50px]">
          <h1 className="text-[30px] font-[600]">로그인</h1>
        </div>

        {/* 회원가입 안내 버튼 */}
        <div className="flex mb-[30px]">
          <span className="mr-[10px]">아직 회원이 아니신가요?</span>
          <Link to="/signup" className="text-[#73BBFB] font-medium">
            회원가입 하기
          </Link>
        </div>

        {/* 아이디, 비밀번호 입력 칸 */}
        <div>
          <form
            className="flex flex-col justify-center items-center gap-3"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            {/* 아이디 입력 */}
            <div>
              <input
                id="userName"
                type="text"
                placeholder="아이디 입력"
                // 접근성을 위한 속성으로, 입력 필드의 유효성 검사 상태를 나타냄
                aria-invalid={
                  !isDirty ? undefined : errors.userName ? "true" : "false"
                }
                // 1번째 매개변수 : userName라는 이름으로 입력 요소를 등록
                // 2번재 매개변수 : 유효성 검사 규칙이 포함된 객체가 전달됨
                {...register("userName", {
                  required: "아이디는 필수 입력입니다.",
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
                className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px]  rounded-[10px]
              focus:outline-[#167DD8] focus:outline-[2px]"
              />
            </div>
            {/* 비밀번호 입력 */}
            <div>
              <input
                id="password"
                type="password"
                placeholder="비밀번호 입력"
                // 접근성을 위한 속성으로, 입력 필드의 유효성 검사 상태를 나타냄
                aria-invalid={
                  !isDirty ? undefined : errors.password ? "true" : "false"
                }
                // 1번째 매개변수 : userName라는 이름으로 입력 요소를 등록
                // 2번재 매개변수 : 유효성 검사 규칙이 포함된 객체가 전달됨
                {...register("password", {
                  required: "비밀번호는 필수 입력입니다.",
                  // minLength: {
                  //   value: 8,
                  //   message: "비밀번호는 최소 8자 이상이어야 합니다.",
                  // },
                  // maxLength: {
                  //   value: 20,
                  //   message: "비밀번호는 최대 20자까지 가능합니다.",
                  // },
                  // pattern: {
                  //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  //   message:
                  //     "비밀번호는 영문자와 숫자를 조합하여 입력해야 합니다.",
                  // },
                })}
                className="p-[10px] border-[#73BBFB] border-[2px] 
              w-[300px] h-[55px] rounded-[10px]
              focus:outline-[#167DD8] focus:outline-[2px]"
              />
              {/* {errors.password && (
                <span className="mt-[5px] text-[14.5px] text-[#167DD8]">
                  {errors.password.message}
                </span>
              )} */}
            </div>
            {/* 로그인 버튼 */}
            <div>
              <button
                type="submit"
                className="p-[10px] bg-[#73BBFB] text-[#FFFFFF]
              w-[300px] h-[55px]  rounded-[10px] text-[18px]"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
        {/* 아이디 찾기, 비밀번호 찾기 */}
        <div className="flex my-[10px] text-[13px]">
          <Link to={"/finduserid"}>아이디 찾기</Link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <Link to={"/findpassword"}>비밀번호 찾기</Link>
        </div>

        {/* SNS 계정 로그인 */}
        <div className="flex flex-col my-[10px] justify-center items-center">
          <span className="text-[17px] font-[600] mb-[10px] text-[#1E5A8F]">
            SNS계정으로 간편하게 로그인
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
      </div>
    </>
  );
};

export default LoginPage;

import { useNavigate } from "react-router-dom";

/** 유저 프로필 컴포넌트 */
const UserProfile = () => {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/manage/profile");
  };
  return (
    <>
      <div
        className="flex flex-col justify-center items-center
      mt-[10px]"
      >
        {/* 아이디 */}
        <div className="text-[16px] my-[10px] text-[#838695]">
          elice_official
        </div>
        <div className="flex justify-center items-center w-full gap-[15px]">
          {/* 프로필 사진 */}
          <div className="h-[77px] w-[77px] bg-[#2e9599] rounded-full flex-shrink-0 ml-[60px]"></div>
          <div className="flex flex-col flex-grow justify-center mr-[60px] gap-[3px]">
            {/* 팔로워, 팔로잉 */}
            <div className="flex space-x-[30px] text-[14px]">
              {/* 팔로워 */}
              <div className="space-x-[5px]">
                <span>팔로워</span>
                <span>30명</span>
              </div>
              {/* 팔로잉 */}
              <div className="space-x-[5px]">
                <span>팔로잉</span>
                <span>30명</span>
              </div>
            </div>
            <span className="text-[17px]">엘리스</span>
            <span className="text-[14px]">
              유럽 여행을 다니며 디지털 노마드의 삶을 사는 개발자
            </span>
            <button
              className="rounded-[10px] bg-[#73BBFB] mt-[10px]
            text-[#FFFFFF] text-[14px] w-[200px] h-[27px]"
              onClick={submitHandler}
            >
              프로필 편집
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

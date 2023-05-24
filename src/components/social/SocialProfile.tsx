import { Link } from "react-router-dom";
import { deleteFollower, newFollower } from "../../api/api-social";
import Button from "../UI/Button";

type User = {
  user: {
    userId: string;
    userName: string;
    userProfileImage: string;
    followingList: string[];
    followerList: string[];
  };
  isFollowing: boolean;
};

/** 소셜 메뉴에서 각 유저들의 프로필 컴포넌트 */
const SocialProfile = (props: User) => {
  const { userId, userName, userProfileImage } = props.user;
  const isFollowing = props.isFollowing;

  const followBtnHandler = async () => {
    try {
      if (isFollowing) {
        await deleteFollower(userId);
      } else {
        await newFollower(userId);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white border border-gray-200 shadow-md rounded-[16px] backdrop-blur-2xl">
      <div className="relative pt-[70%]">
        <img
          className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
          src={userProfileImage}
          alt={`${userProfileImage}'s profile`}
        />
      </div>
      <div className="px-[12px] pt-[12px] pb-[16px] leading-[16px] ">
        <div className="flex flex-col">
          <Link to={`/${userId}`}>
            <div>
              <span>{userId}</span>
            </div>
            <div className="text-sm">
              <span>{userName}</span>
            </div>
          </Link>
          {isFollowing ? (
            <Button
              className="p-[4px] mt-[5px] w-full text-[14px]"
              isBgColor={false}
              onClick={followBtnHandler}
            >
              팔로잉
            </Button>
          ) : (
            <Button
              className="p-[4px] mt-[5px] w-full text-[14px]"
              isBgColor={true}
              onClick={followBtnHandler}
            >
              팔로우
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialProfile;

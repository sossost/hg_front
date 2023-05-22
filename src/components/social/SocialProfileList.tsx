import BackBtn from "../UI/BackBtn";
import SocialProfile from "./SocialProfile";

const DUMMY_USER_DATA = {
  userId: "Elice",
  userName: "엘리스",
  followerList: [
    {
      userId: "shagratshagrattt",
      userName: "장윤수장윤수장윤수",
      userProfileImage: "123.jpeg",
      isFollowing: true,
      followingCount: 333,
      followersCount: 533,
      followingList: ["Elice"],
      followerList: ["Elice"],
    },
    {
      userId: "happysh23",
      userName: "이수현",
      userProfileImage: "123.jpeg",
      followingCount: 133,
      followersCount: 53,
      followingList: ["Elice"],
      followerList: ["Elice"],
    },
    {
      userId: "byunguk11",
      userName: "고병욱",
      userProfileImage: "123.jpeg",
      followingCount: 33,
      followersCount: 53,
      followingList: ["Elice"],
      followerList: ["Elice"],
    },
    {
      userId: "bansuk123",
      userName: "황반석",
      userProfileImage: "123.jpeg",
      followingCount: 43,
      followersCount: 53,
      followingList: ["Elice"],
      followerList: [],
    },
    {
      userId: "minsuk321",
      userName: "강민석",
      userProfileImage: "123.jpeg",
      followingCount: 43,
      followersCount: 53,
      followingList: ["Elice"],
      followerList: [],
    },
    {
      userId: "hoojun159",
      userName: "송호준",
      userProfileImage: "123.jpeg",
      followingCount: 43,
      followersCount: 53,
      followingList: ["Elice"],
      followerList: ["Elice"],
    },
    {
      userId: "suyeon111",
      userName: "김서연",
      userProfileImage: "123.jpeg",
      followingCount: 43,
      followersCount: 53,
      followingList: ["Elice"],
      followerList: [],
    },
    {
      userId: "gyuhae123",
      userName: "이규해",
      userProfileImage: "123.jpeg",
      followingCount: 43,
      followersCount: 53,
      followingList: ["Elice"],
      followerList: [],
    },
  ],
  followingList: [
    {
      userId: "shagrat  ",
      userName: "장윤수",
      userProfileImage: "123.jpeg",
      followingCount: 333,
      followersCount: 533,
      followingList: ["Elice"],
      followerList: [],
    },
    {
      userId: "happysh23",
      userName: "이수현",
      userProfileImage: "123.jpeg",
      isFollowing: true,
      followingCount: 133,
      followersCount: 53,
      followingList: ["Elice"],
      followerList: [],
    },
    {
      userId: "byunguk11",
      userName: "고병욱",
      userProfileImage: "123.jpeg",
      followingCount: 33,
      followersCount: 53,
      followingList: ["Elice"],
      followerList: [],
    },
    {
      userId: "bansuk123",
      userName: "황반석",
      userProfileImage: "123.jpeg",
      followingCount: 43,
      followersCount: 53,
      followingList: [],
      followerList: [],
    },
  ],
};

type Page = "followerPage" | "followingPage";

const SocialProfileList = ({ page }: { page: Page }) => {
  const isFollowerPage = page === "followerPage";
  const isFollowingPage = page === "followingPage";

  return (
    <div className="flex flex-col gap-[20px] w-full px-[20px] lg:w-[1024px] lg:mx-auto">
      <div className="mx-auto py-[20px]">헤더부분</div>
      <div className="mx-auto">
        <h1>
          {DUMMY_USER_DATA.userName}
          {isFollowerPage &&
            `님을 구독하는 ${DUMMY_USER_DATA.followerList.length}명`}
          {isFollowingPage &&
            `님이 구독하는 ${DUMMY_USER_DATA.followingList.length}명`}
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]">
        {isFollowerPage &&
          DUMMY_USER_DATA.followerList.map((user) => {
            const isFollowing = user.followerList.find(
              (item) => item === DUMMY_USER_DATA.userId
            )
              ? true
              : false;
            return (
              <SocialProfile
                key={user.userId}
                user={user}
                isFollowing={isFollowing}
              />
            );
          })}
        {isFollowingPage &&
          DUMMY_USER_DATA.followingList.map((user) => (
            <SocialProfile key={user.userId} user={user} isFollowing={true} />
          ))}
      </div>
    </div>
  );
};

export default SocialProfileList;

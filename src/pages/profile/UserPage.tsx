import Post from "../../components/UI/Post";
import UserProfile from "../../components/profile/UserProfile";
import UserTags from "../../components/profile/UserTags";

const UserPage: React.FC = () => {
  return (
    <>
      <UserProfile></UserProfile>
      <UserTags></UserTags>
      <Post></Post>
    </>
  );
};

export default UserPage;

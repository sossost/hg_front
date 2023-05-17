import styled from "styled-components";
import ViewPost from "../components/post/ViewPost";
import Comments from "../components/post/comments/Comments";
import HashTag from "../components/post/HashTag";

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  border: 2px solid red;
  min-width: 390px;
  min-height: 390px;
  gap: 20px;
`;

const ViewPostPage = () => {
  return (
    <ViewContainer>
      <ViewPost />
      <Comments />
      <HashTag />
    </ViewContainer>
  );
};

export default ViewPostPage;

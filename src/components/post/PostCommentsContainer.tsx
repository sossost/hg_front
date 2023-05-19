import React, { useState } from "react";
import styled from "styled-components";
import PostLikes from "./PostLikes";
import Comments from "./comments/Comments";

/** 댓글 이미지 */
const CommentImage = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

/** 댓글 창 */
type CommentContainerProps = {
  visible: boolean;
};

const CommentContainer = styled.div<CommentContainerProps>`
  width: 100%;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

//**PostCommentsContainer 컴포넌트 */
const PostCommentsContainer = () => {
  const [commentCount, setCommentCount] = useState<number>(0); // commentCount 상태 추가

  const handleCommentImageClick = () => {
    setCommentContainerVisible(!commentContainerVisible);
  };

  //초기값은 false로 댓글창을 숨기고
  const [commentContainerVisible, setCommentContainerVisible] =
    useState<boolean>(false);

  return (
    <>
      <div className="w-[100%] flex justify-between border-[2px] border-[yellow] ">
        <div className="flex items-center">
          <button onClick={handleCommentImageClick}>
            <CommentImage src={"/comment.png"} alt="댓글 이미지" />
          </button>
          <div className="m-[0px] m-[auto]">
            <span>댓글{commentCount}개</span>
          </div>
        </div>
        <PostLikes />
      </div>
      <CommentContainer visible={commentContainerVisible}>
        <Comments />
      </CommentContainer>
    </>
  );
};
export default PostCommentsContainer;

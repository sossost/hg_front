import React, { useState } from "react";
import styled from "styled-components";
import PostLikes from "../UI/PostLikes";
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

/** 댓글창 */
const CommentContainer = styled.div<CommentContainerProps>`
  width: 100%;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

/**PostCommentsContainer 컴포넌트 */
const PostCommentsContainer = () => {
  /** test 더미 데이터 */
  const post1 = {
    isLike: true,
    likedPersons: [
      "김김",
      "박박",
      "이이이",
      "정정정정",
      "김김",
      "박박",
      "이이이",
      "정정정정",
    ],
  };

  /** 댓글 개수 상태관리 */
  const [commentCount, setCommentCount] = useState<number>(0); // commentCount 상태 추가

  /** 댓글 버튼 핸들러 클릭시 댓글창을 토글형식으로 랜더링 */
  const handleCommentImageClick = () => {
    setCommentContainerVisible(!commentContainerVisible);
  };

  //초기값은 false로 댓글창을 숨김
  const [commentContainerVisible, setCommentContainerVisible] =
    useState<boolean>(false);

  return (
    <>
      <div className="w-[100%] flex justify-between border-[1px] border-[gray] ">
        <div className="flex items-center">
          <button onClick={handleCommentImageClick}>
            <CommentImage src={"/comment.png"} alt="댓글 이미지" />
          </button>
          <div className="m-[0px] m-[auto]">
            <span>댓글{commentCount}개</span>
          </div>
        </div>
        <PostLikes
          likesCount={Number(post1.likedPersons.length)}
          isLiked={post1.isLike}
        />
      </div>
      <CommentContainer visible={commentContainerVisible}>
        <Comments />
      </CommentContainer>
    </>
  );
};
export default PostCommentsContainer;

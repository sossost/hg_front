import React, { useState } from "react";
import styled from "styled-components";
import PostLikes from "../PostLikes";
import Comment from "./Comment";

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

//**댓글 모음 컴포넌트 */
const Comments = () => {
  const myImgUrl = "/my-profile-image.png";
  //초기값은 false로 댓글창을 숨기고
  const [commentContainerVisible, setCommentContainerVisible] =
    useState<boolean>(false);
  const [commentCount, setCommentCount] = useState<number>(0); // commentCount 상태 추가

  const handleCommentImageClick = () => {
    setCommentContainerVisible(!commentContainerVisible);
  };

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
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div className="m-[10px]">
              <img
                className="max-h-[40px] max-w-[40px] "
                src={myImgUrl}
                alt={"사용자 이미지"}
              ></img>
            </div>
            <div className="flex-col m-[10px]">
              <div>
                <span>닉네임</span>
              </div>
              <div>
                <input
                  className="border-[2px] border-[gray]"
                  placeholder="댓글을 입력하세요.."
                ></input>
              </div>
            </div>
          </div>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </CommentContainer>
    </>
  );
};

export default Comments;

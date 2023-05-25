import React, { useState } from "react";
import styled from "styled-components";
import { atom, useRecoilState } from "recoil";
import PostLikes from "../UI/PostLikes";
import Comments from "./comments/Comments";
import { isLikedFunction } from "../../utils/isLikes-function";

/** 댓글 이미지 스타일드 컴포넌트 */
const CommentImage = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

/** 댓글 컨테이너 타입지정 */
type CommentContainerProps = {
  visible: boolean;
};

/** 댓글 컨테이너 스타일드 컴포넌트 */
const CommentContainer = styled.div<CommentContainerProps>`
  width: 100%;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

// Recoil atom 정의
const commentCountState = atom({
  key: "commentCount",
  default: 0,
});

/** 게시물 댓글 컨테이너 컴포넌트 */
const PostCommentsContainer = () => {
  const post1 = {
    likedPersons: [1234, 2345, 6326, 51252, 125, 4326, 2342, 543252],
  };
  //로그인 된 유저 아이디 예시
  const loginedId = 1234;

  //좋아요 유무에 대한 변수
  const isLiked = isLikedFunction(post1, loginedId);

  // Recoil 상태 및 업데이트 함수 가져오기
  const [commentCount, setCommentCount] = useRecoilState(commentCountState);

  /** 댓글 이미지 버튼 클릭 (토글) 핸들러 */
  const handleCommentImageClick = () => {
    setCommentContainerVisible(!commentContainerVisible);
  };

  // 댓글 컨테이너 시각 토글링 상태관리
  const [commentContainerVisible, setCommentContainerVisible] =
    useState<boolean>(false);

  return (
    <>
      <div className="w-[100%] flex justify-between border-[1px] border-[gray]">
        <div className="flex items-center">
          <button onClick={handleCommentImageClick}>
            <CommentImage src={"/comment.png"} alt="댓글 이미지" />
          </button>
          <div className="m-[0px] m-[auto]">
            <span>댓글{commentCount}개</span>
          </div>
        </div>
        {/* 게시글 좋아요 컴포넌트 */}
        <PostLikes
          likesCount={Number(post1.likedPersons.length)}
          isLiked={isLiked}
        />
      </div>
      {/* 댓글 컨테이너 */}
      <CommentContainer visible={commentContainerVisible}>
        {/* 댓글들 컴포넌트 */}
        <Comments
          commentCount={commentCount}
          setCommentCount={setCommentCount}
        />
      </CommentContainer>
    </>
  );
};

export default PostCommentsContainer;

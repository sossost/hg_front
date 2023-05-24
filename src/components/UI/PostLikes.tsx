import React, { useState } from "react";
import styled from "styled-components";

const LikeStyledImage = styled.img`
  width: 25px;
  height: 25px;
`;

/**좋아요 컴포넌트 프롭스 타입 : [좋아요 개수: number], [좋아요 유무: boolean] */
type PostLikesProps = {
  likesCount: number;
  isLiked: boolean;
};

/**좋아요 컴포넌트 */
const PostLikes = ({ likesCount, isLiked }: PostLikesProps) => {
  //좋아요 카운팅 상태관리
  const [currentLikesCount, setCurrentLikesCount] = useState(likesCount);
  //좋아요 유무 상태관리
  const [currentIsLiked, setCurrentIsLiked] = useState(isLiked);

  /** 좋아요 버튼 핸들러 true일때 누르면 count -1, false로 / false로일때 누르면 count +1, true */
  const handleLikeButtonClick = () => {
    setCurrentLikesCount((prevCount) =>
      currentIsLiked ? prevCount - 1 : prevCount + 1
    );
    setCurrentIsLiked(!currentIsLiked);
    // api 로 카운트, boolean, 게시물 id, 유저 id룰 통해 보내야함.
  };

  return (
    <>
      <div className="m-[10px] flex items-center">
        <button
          className="flex m-[auto] mr-[10px]"
          onClick={handleLikeButtonClick}
        >
          <LikeStyledImage
            // currentIsLiked (현재 라이크 유무) true이면 꽉찬 하트 / false면 빈 하트의 이미지 로딩
            src={currentIsLiked ? "/icon_heart_full.svg" : "/icon_heart_empty.svg"}
            alt="하트 이미지"
          />
        </button>
        {/* 좋아요 개수가 0이면 좋아요 개수를 랜더링 하지 않는다. 1개 이상이면 랜더링한다. */}
        {currentLikesCount !== 0 && (
          <span>{currentLikesCount}</span>
        )}
      </div>
    </>
  );
};

export default PostLikes;

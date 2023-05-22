import React, { useState } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 25px;
  height: 25px;
`;

type PostLikesProps = {
  initialLikesCount?: number;
};

/**좋아요 컴포넌트 */
const PostLikes = ({ initialLikesCount = 13 }: PostLikesProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikesCount);

  const handleLikeButtonClick = () => {
    setLikesCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="m-[10px] flex items-center">
        <button
          className="flex m-[0px] m-[auto] mr-[10px]"
          onClick={handleLikeButtonClick}
        >
          <StyledImage
            src={isLiked ? "/heart-filled.png" : "/heart-empty.png"}
            alt="하트 이미지"
          />
        </button>
        {likesCount !== 0 && <span className="w-[50px]">{likesCount}</span>}
      </div>
    </>
  );
};

export default PostLikes;

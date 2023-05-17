import React, { useState } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 25px;
  height: 25px;
`;

//**좋아요 컴포넌트 */
const PostLikes = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="border-[2px] border-[green] m-[10px] flex items-center">
        <button className="flex m-[0px] m-[auto] mr-[10px]">
          <StyledImage
            src={isLiked ? "/heart-filled.png" : "/heart-empty.png"}
            alt="하트 이미지"
            onClick={handleLikeButtonClick}
          />
        </button>
        <span className="w-[50px]">count</span>
      </div>
    </>
  );
};

export default PostLikes;

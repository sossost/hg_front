import React, { useState } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 25px;
  height: 25px;
`;

/**댓글 컴포넌트 */
const Comment = () => {
  const userImgUrl = "/user1-image.png";
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="w-[100%]">
        <div className=" flex justify-between ">
          <div className=" flex justify-between w-[100%]">
            <div>
              <img
                className="max-h-[40px] max-w-[40px] m-[10px]"
                src={userImgUrl}
                alt={"사용자 이미지"}
              ></img>
            </div>
            <div className=" flex-col m-[10px] w-[100%]">
              <div className=" flex justify-between ">
                <span>닉네임</span>
                <span className="text-[8px]">2023.05.18</span>
              </div>
              <div>
                <span>댓글 내용</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="border-[2px] border-[green] m-[10px] flex items-center w-[85px] ">
              <button
                className="flex m-[0px] m-[auto] mr-[10px]"
                onClick={handleLikeButtonClick}
              >
                <StyledImage
                  src={isLiked ? "/heart-filled.png" : "/heart-empty.png"}
                  alt="하트 이미지"
                />
              </button>
              <span className="w-[50px]">count</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;

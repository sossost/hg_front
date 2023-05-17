import React from "react";
import styled from "styled-components";
import PostLikes from "../PostLikes";
import Comment from "./Comment";

const CommentImage = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

//**댓글 모음 컴포넌트 */
const Comments = () => {
  const myImgUrl = "/my-profile-image.png";
  return (
    <>
      <div className="w-[100%] flex justify-between border-[2px] border-[yellow] ">
        <button>
          <CommentImage src={"/comment.png"} alt="댓글 이미지" />
        </button>
        <PostLikes />
      </div>
      <div className="w-[100%]">
        <div className=" flex justify-between ">
          <div className=" flex justify-between ">
            <div className="m-[10px]">
              <img
                className="max-h-[40px] max-w-[40px] "
                src={myImgUrl}
                alt={"사용자 이미지"}
              ></img>
            </div>
            <div className=" flex-col m-[10px]">
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
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </>
  );
};

export default Comments;

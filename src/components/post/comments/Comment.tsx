import React, { useState } from "react";
import styled from "styled-components";
import PostLikes from "../../UI/PostLikes";
import { isLikedFunction } from "../../../utils/isLikes-function";

const StyledImage = styled.img`
  width: 25px;
  height: 25px;
`;

/** 코맨트 프롭스 타입지정 */
type CommentProps = {
  comment: {
    comment_id: number;
    created_at: string;
    content: string;
    user: {
      id: number;
      nickName: string;
      profile_img: string;
    };
    likes: number;
    liked_user_list: number[];
  };
};

/**댓글 컴포넌트 */
const Comment = ({ comment }: CommentProps) => {
  /**props로 받아온 데이터를 구조분해 할당*/
  const {
    comment_id,
    created_at,
    content,
    user: { id, nickName, profile_img },
    likes,
    liked_user_list,
  } = comment;

  //로그인 되어있는 유저 예시
  const userId = 1414;
  const isLiked = isLikedFunction({ likedPersons: liked_user_list }, userId);

  return (
    <>
      <div className="w-[100%]">
        <div className=" flex justify-between ">
          <div className=" flex justify-between w-[100%]">
            <div>
              <img
                className="max-h-[40px] max-w-[40px] m-[10px]"
                // 사용자 이미지
                src={profile_img}
                alt={"사용자 이미지"}
              ></img>
            </div>
            <div className=" flex-col m-[10px] w-[100%]">
              <div className=" flex justify-between ">
                <span>{nickName}</span>
                <span className="text-[8px]">{created_at}</span>
              </div>
              <div>
                {/* 댓글내용 */}
                <span>{content}</span>
              </div>
            </div>
          </div>
          <PostLikes
            likesCount={Number(liked_user_list.length)}
            isLiked={isLiked}
          />
        </div>
      </div>
    </>
  );
};
export default Comment;

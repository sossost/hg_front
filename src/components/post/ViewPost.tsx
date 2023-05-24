import React, { useState } from "react";

/** 게시물 관련 더미 데이터 */
const userPost = {
  user_id: 8147,
  schedule_id: "123123",
  title: "즐거웠던 파리의 하루",
  content: "안녕하세요",
  location: "프랑스",
  thumbnail: "http://abc.com/sdf/sdfs",
  started_at: "2023-05-21 12:32:50",
  end_at: "2023-05-21 12:32:50",
  created_at: "2023-05-23 13:52:50",
  hashtag: "여행",
  hidden: 0,
};

/** date 포맷팅 */
const SliceDate = (date: string) => {
  return date.slice(0, 10);
};

/** id 검사 함수 인자: (로그인된 아이디, 해당게시물의 유저아이디)*/
const IdCetificate = (loginedId: number, postsUserId: number): boolean => {
  return loginedId === postsUserId ? true : false;
};

/**게시물 조회 컴포넌트 */
const ViewPost = () => {
  const loginedId = 8147;
  // test용 이미지
  const tripImgUrl = "/trip-image.png";
  // 게시물 제목 상태관리
  const [title, setTitle] = useState<string>(userPost.title);
  // 국가 상태관리
  const [location, setCountry] = useState<string>(userPost.location);
  // 여행시작일 상태관리
  const [startedAt, setStartedAt] = useState<string>(
    SliceDate(userPost.started_at)
  );
  // 여행복귀일 제목 상태관리
  const [endAt, setEndAt] = useState<string>(SliceDate(userPost.end_at));
  // 게시물 작성일 상태관리
  const [createdAt, setCreatedAt] = useState<string>(
    SliceDate(userPost.created_at)
  );
  // 게시물 내용 상태관리
  const [content, setContent] = useState<string>(userPost.content);
  return (
    <>
      <article className="w-[100%] m-[0px] m-[auto] ">
        <div className="flex justify-between">
          <span className="text-[20px]">{title}</span>
          {/* 로그인된 id 가 게시물의 유저 id가 같으면 게시물 관리 버튼 생성 */}
          {IdCetificate(loginedId, userPost.user_id) ? (
            <button>게시물 관리</button>
          ) : (
            <span></span>
          )}
        </div>
        <div>
          <h2>{location}</h2>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px]">
            {startedAt}~{endAt}
          </span>
          <span className="text-[12px]">{createdAt}</span>
        </div>
        <div className="w-[100%]">
          <img className="w-[100%]" src={tripImgUrl} alt={"여행이미지"}></img>
          {content}
        </div>
      </article>
    </>
  );
};
export default ViewPost;

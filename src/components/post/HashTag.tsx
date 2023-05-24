import React, { useState } from "react";

/**HashTag 컴포넌트 */
const HashTag = () => {
  //해시택그 더미데이터
  const hastags = ["프랑스", "뷰맛집", "여행", "고프로", "백트래킹"];
  //배열로 받은 해시태그를 #을 붙이고 문자열로 케스케이드
  const fomattedHastags = hastags.map((str) => `#${str} `).join("");

  return (
    <>
      <div className=" w-[100%] m-[px] m-[auto] border-[0.5px] border-[gray] flex justify-center items-center">
        <h1 className="m-[20px]">{fomattedHastags} </h1>
      </div>
    </>
  );
};
export default HashTag;

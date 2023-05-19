//**게시물 조회 컴포넌트 */
const ViewPost = () => {
  const tripImgUrl = "/trip-image.png";
  return (
    <>
      <div className="w-[100%] m-[0px] m-[auto] border-[2px] border-[black] ">
        <div className="flex justify-between">
          <h1>프랑스 2일차 여행일기</h1>
          <span>게시물 관리</span>
        </div>
        <div>
          <h2>프랑스</h2>
        </div>
        <div className="flex justify-between">
          <span>2023/03/23~2023/05/10</span>
          <span>2023/05/12</span>
        </div>
        <div className="border-[2px] border-[pink]">
          <img className="w-[100%]" src={tripImgUrl} alt={"여행이미지"}></img>
        </div>
      </div>
    </>
  );
};
export default ViewPost;

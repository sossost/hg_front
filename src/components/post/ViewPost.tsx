//**게시물 조회 컴포넌트 */
const ViewPost = () => {
  const tripImgUrl = "/trip-image.png";
  return (
    <>
      <div className="w-[100%] m-[0px] m-[auto]  ">
        <div className="flex justify-between">
          <span className="text-[20px]">프랑스 2일차 여행일기</span>
          <span>게시물 관리</span>
        </div>
        <div>
          <h2>프랑스</h2>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px]">2023/03/23~2023/05/10</span>
          <span className="text-[12px]">2023/05/12</span>
        </div>
        <div className="">
          <img className="w-[100%]" src={tripImgUrl} alt={"여행이미지"}></img>
        </div>
      </div>
    </>
  );
};
export default ViewPost;

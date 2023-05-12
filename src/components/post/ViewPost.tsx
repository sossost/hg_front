//**게시물 조회 컴포넌트 */
const ViewPost = () => {
  const imgUrl = "../../.././public/123.jpeg";
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
          <img
            className="h-[400px] w-[400px]"
            src={imgUrl}
            alt={"여행이미지"}
          ></img>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          atque dolores ipsum illum nihil explicabo commodi, in nulla ad eos sed
          assumenda minus odit dolor reiciendis nesciunt labore quo ullam!Lorem
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          architecto quae in natus similique dignissimos distinctio error ab
          minus, quia velit quisquam. Minus, provident voluptatem recusandae
          excepturi mollitia quam commodi!
        </div>
      </div>
    </>
  );
};
export default ViewPost;

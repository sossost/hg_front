//**댓글 컴포넌트 */
const Comment = () => {
  const imgUrl = "../../../.././public/123.jpeg";
  return (
    <>
      <div className="w-[100%]">
        <div className=" flex justify-between ">
          <div className=" flex justify-between ">
            <div>
              <img
                className="max-h-[40px] max-w-[40px]"
                src={imgUrl}
                alt={"사용자 이미지"}
              ></img>
            </div>
            <div className=" flex-col ">
              <div>
                <span>닉네임</span>
              </div>
              <div>
                <span>댓글 내용</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button>하트</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;

import Comment from "./Comment";

//**댓글 모음 컴포넌트 */
const Comments = () => {
  const myImgUrl = "/my-profile-image.png";

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between">
          <div className="m-[10px]">
            <img
              className="max-h-[40px] max-w-[40px] "
              src={myImgUrl}
              alt={"사용자 이미지"}
            ></img>
          </div>
          <div className="flex-col m-[10px]">
            <div>
              <span>닉네임</span>
            </div>
            <div>
              <input
                className="border-[1.5px] border-[gray]"
                placeholder="댓글을 입력하세요.."
              ></input>
            </div>
          </div>
        </div>
      </div>
      {/* map으로 뿌려줘야함 */}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </>
  );
};

export default Comments;

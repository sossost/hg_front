import PostLikes from "../PostLikes";
import Comment from "./Comment";

//**댓글 모음 컴포넌트 */
const Comments = () => {
  const imgUrl = "../../../.././public/123.jpeg";
  return (
    <>
      <div className="w-[100%] flex justify-between border-[2px] border-[yellow]">
        <button>댓글</button>
        <PostLikes />
      </div>
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

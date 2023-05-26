import Comment from "./Comment";

/** 코맨트 프롭스 타입지정 */
type CommentsProps = {
  commentCount: number;
  setCommentCount: (count: number) => void;
};

//**댓글 모음 컴포넌트 */
const Comments = ({ commentCount, setCommentCount }: CommentsProps) => {
  const myImgUrl = "/my-profile-image.png";

  //전체 댓글 더미 데이터
  const commentsData = {
    postId: 123,
    comments: [
      {
        comment_id: 1234,
        created_at: "2015-03-02",
        content: "댓글댓글 재밌다 댓글댓글 멋져요댓글댓글 재밌다",
        user: {
          id: 1234,
          nickName: "파란하늘",
          profile_img: "/user1-image.png",
        },
        likes: 3,
        liked_user_list: [123, 1235, 1251],
      },
      {
        comment_id: 4142,
        created_at: "2015-03-03",
        content: "멋져요~!~!~!~!",
        user: {
          id: 1234,
          nickName: "여행중독자",
          profile_img: "/user1-image.png",
        },
        likes: 3,
        liked_user_list: [123, 1235, 1251, 1221, 141, 1141],
      },
    ],
  };

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
      {/* comments 배열을 map으로 순회하여 Comment 컴포넌트를 생성 */}
      {commentsData.comments.map((comment) => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}
    </>
  );
};

export default Comments;

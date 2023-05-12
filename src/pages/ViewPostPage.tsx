import HashTag from "../components/post/HashTag";
import ViewPost from "../components/post/ViewPost";
import Comments from "../components/post/comments/Comments";

//**게시물(상세) 조회 페이지 */
const ViewPostPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[100%]  m-[0px] m-[auto] border-[2px] border-[red] min-w-[390px] min-h-[390px] space-y-4">
        <ViewPost />
        <Comments />
        <HashTag />
      </div>
    </>
  );
};
export default ViewPostPage;

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../../api/api-post";
import Editor from "../../components/editor/Editor";

const NewPostPage = () => {
  const postId = useParams().postId;

  const { data: post } = useQuery(["post", postId], () => getPostById(postId), {
    enabled: !!postId,
  });

  return (
    <div>
      <Editor post={post} />
    </div>
  );
};

export default NewPostPage;

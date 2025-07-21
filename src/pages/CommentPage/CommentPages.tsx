import { useGetCommentsByPostIdQuery } from "../../entities/post/commentsApi";

import { useParams } from "react-router-dom";
import { PostList } from "../../widgets/PostList/PostList";

const CommentPage = () => {
  const { postId } = useParams();
  const id = Number(postId);
  const { data: posts = [], isLoading } = useGetCommentsByPostIdQuery(id);
  if (isLoading) return <div>Loading...</div>;

  return (
      <PostList posts={posts} minLength={1} />
  )
}
export default CommentPage
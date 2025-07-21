import { useParams } from "react-router-dom";
import { PostList } from "../../widgets/PostList/PostList";
import { useGetPostsByUserIdQuery } from "../../entities/post/postsApi";

const UserPostsPage = () => {
  const { userId } = useParams();
  const id = Number(userId);

  const { data: posts = [], isLoading } = useGetPostsByUserIdQuery(id);

  if (isLoading) return <div>Loading posts...</div>;
  return (
      <PostList posts={posts} minLength={1} />
  );
};
export default UserPostsPage
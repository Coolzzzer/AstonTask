import { usePosts } from "../features/PostList/model/hooks/usePosts";
import { PostList } from "../widgets/PostList/PostList";


export const UserPostsPage = () => {
  const posts = usePosts()
  return (
    <div>
      <PostList posts={posts} minLength={1} />
    </div>
  );
};

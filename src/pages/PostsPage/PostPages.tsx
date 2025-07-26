import { useEffect, useState} from "react";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import { PostListWithLoading } from "../../features/PostListWithLoading/PostListWithLoading";

const PostsPage = () => {
  const posts = usePosts()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <PostListWithLoading posts={posts} minLength={10} isLoading={isLoading}/>
  )
}
export default PostsPage
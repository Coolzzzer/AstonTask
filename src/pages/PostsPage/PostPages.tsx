import { useEffect, useState} from "react";
import { PostListWithLoading } from "../../shared/lib/hoc/PostListWithLoading";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";

const PostsPage = () => {
  const posts = usePosts()
  const [minLength, setMinLength] = useState(10);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <PostListWithLoading posts={posts} minLength={minLength} isLoading={isLoading}/>
  )
}
export default PostsPage
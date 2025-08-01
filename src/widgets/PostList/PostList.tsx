import { useMemo, type FC } from "react";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { Post } from "../../entities/post/ui/Post";
type PostListProps = { 
    posts: { title?: string, body?:string, id?: number, userId?: number, postId?: number, email?: string, name?: string}[],
    minLength: number,
}
export const PostList:FC<PostListProps> = ({ posts, minLength}) => {
  const filteredPosts: { title?: string, body?:string, id?: number, userId?: number, postId?: number, email?: string, name?: string}[] = useMemo(
    () => filterByLength(posts, minLength),
    [posts, minLength]
  );
        
  return (
    <ul>
      {filteredPosts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </ul>
  );;
}

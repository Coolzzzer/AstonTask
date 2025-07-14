import { useMemo, useCallback, type FC } from "react";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { CommentList } from "../CommentList/ui/CommentList";
import { NavLink } from "react-router-dom";
type PostListProps = {
    posts: { post: string, comment:string, id: number}[],
    minLength: number,
}
export const PostList:FC<PostListProps> = ({ posts, minLength}) => {
  const filteredPosts: { post: string; comment: string; id: number }[] = useMemo(
    () => filterByLength(posts, minLength),
    [posts, minLength]
  );
        

  const renderPost = useCallback(
    (post: { post: string, comment: string, id: number}, index: number) => 
      
        <div style={{background:"grey", margin:"10px", width:"800px", padding:"10px"}} key={index}>{post.post} 
          <CommentList comments={post.comment} />
          <button style={{margin:"5px"}}><NavLink to={`/posts/${post.id}`}>Details</NavLink></button>         
        </div>
,
    []
  );

  return <ul>{filteredPosts.map(renderPost)}</ul>;
};


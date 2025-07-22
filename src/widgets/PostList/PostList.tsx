import { useMemo, type FC } from "react";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { CommentList } from "../CommentList/ui/CommentList";
import { NavLink } from "react-router-dom";
import type { PostListProps } from "../../shared/types/post";

export const PostList:FC<PostListProps> = ({ posts, minLength}) => {
  const filteredPosts: { post: string; comment: string; id: number }[] = useMemo(
    () => filterByLength(posts, minLength),
    [posts, minLength]
  );
        

  return(  
  <ul>
    {filteredPosts.map((post, index) =>
      <div style={{background:"grey", margin:"10px", width:"800px", padding:"10px"}} key={index}>{post.post} 
        <CommentList comments={post.comment} />
        <button style={{margin:"5px"}}><NavLink to={`/posts/${post.id}`}>Details</NavLink></button>         
      </div>
    )}
  </ul>
  )
};


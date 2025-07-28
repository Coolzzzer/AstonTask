import { useMemo, useCallback, type FC } from "react";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { CommentList } from "../CommentList/ui/CommentList";
type PostListProps = {
    posts: { title: string, body:string }[],
    minLength: number,
}
export const PostList:FC<PostListProps> = ({ posts, minLength}) => {
    const filteredPosts: { title: string; body: string }[] = useMemo(
        () => filterByLength(posts, minLength),
        [posts, minLength]
      );      

  const renderPost = useCallback(
    (post: { title: string, body: string }, index: number) => 
        <div style={{background:"grey", margin:"5px", width:"800px", padding:"10px"}} key={index}>{post.title} 
            <CommentList comments={post.body}/>
        </div>,
    []
  );

  return <ul>{filteredPosts.map(renderPost)}</ul>;
};


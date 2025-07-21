import { useMemo, useCallback, type FC } from "react";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { CommentList } from "../CommentList/ui/CommentList";
type PostListProps = {
    posts: { title?: string, body?:string, id?: number, userId?: number, postId?: number, email?: string, name?: string}[],
    minLength: number,
}
export const PostList:FC<PostListProps> = ({ posts, minLength}) => {
  const filteredPosts: { title?: string, body?:string, id?: number, userId?: number, postId?: number, email?: string, name?: string}[] = useMemo(
    () => filterByLength(posts, minLength),
    [posts, minLength]
  );
        

  const renderPost = useCallback(
    (post: { title?: string, body?:string, id?: number, userId?: number, postId?: number, email?: string, name?: string}, index: number) => 
        
        <div style={{background:"grey", margin:"10px", width:"800px", padding:"10px"}} key={index}>{post.title} 

          {post.name && post.email ? (
            <div>
              <div>{post.name}</div>
              <div>{post.email}</div>
            </div>
          ) : null
          }
          {post.body ?
            <CommentList comments={post.body} /> : null
          }
        </div>
,
    []
  );

  return <ul>{filteredPosts.map(renderPost)}</ul>;
}

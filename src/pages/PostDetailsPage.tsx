import { useCallback } from "react";
import { usePosts } from "../features/PostList/model/hooks/usePosts"

export const PostDetailsPage  = () => {
    const posts = usePosts()
    const renderPostDetails = useCallback(
        (post: { post:string, comment:string, todos:string, userId: number, id: number, img: string}, index: number) => 
            <div key={index}>
                <img src={post.img}/>
                <div>
                    Id: {post.id}, 
                    User: {post.userId}
                </div>
                <h4>Post: </h4>{post.post}
                <h4>Comment </h4>{post.comment}
                <h4>Todos: </h4>{post.todos}
            </div>,
        []
      )
    return (
        <ul>{posts.map(renderPostDetails)}</ul>
    )
}
import { useCallback } from "react";
import { usePosts } from "../features/PostList/model/hooks/usePosts"
import { NavLink } from "react-router-dom";

export const AlbumPhotosPage  = () => {
    const posts = usePosts()
    const renderPostDetails = useCallback(
        (post: { userId: number, id: number, img: string}, index: number) => 
            <div key={index}>
                <img src={post.img}/>
                <div>
                    Id: {post.id}, 
                    User: {post.userId}
                </div>
            </div>,
        []
      )
    return (
        <div>
            <ul>{posts.map(renderPostDetails)}</ul>
            <button style={{margin:"5px"}}><NavLink to={`/posts`}>Back</NavLink></button>   
        </div>
         
    )
}
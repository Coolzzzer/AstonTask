import { useCallback } from "react";
import { usePosts } from "../features/PostList/model/hooks/usePosts"
import { NavLink } from "react-router-dom";

export const UserAlbumsPage = () => {
    const posts = usePosts()
    const renderPostImg = useCallback(
        (post: { img:string, id: number}, index: number) => 
            <NavLink to={`/albums/${post.id}/photos`}>
                <img key={index} src={post.img} style={{width:"400px", margin:"10px"}}></img>
            </NavLink>,
        []
      )
    return (
         <div>{posts.map(renderPostImg)}</div>
    )
}
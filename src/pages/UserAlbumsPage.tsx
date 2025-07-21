import { usePosts } from "../features/PostList/model/hooks/usePosts"
import { NavLink } from "react-router-dom";

export const UserAlbumsPage = () => {
    const posts = usePosts()
    return (
         <div>
            {
                posts.map((post,index)=>
                    <NavLink key={index} to={`/albums/${post.id}/photos`}>
                        <img src={post.img} style={{width:"400px", margin:"10px"}}></img>
                    </NavLink>
                )
            }
        </div>
    )
}
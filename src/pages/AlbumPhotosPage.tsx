import { usePosts } from "../features/PostList/model/hooks/usePosts"

export const AlbumPhotosPage  = () => {
    const posts = usePosts()
    return (
            <ul>
                {
                    posts.map((post, index)  => 
                        <div key={index}>
                            <img src={post.img}/>
                            <div>
                                Id: {post.id}, 
                                User: {post.userId}
                            </div>
                        </div>
                    )
                }
            </ul>
    )
}
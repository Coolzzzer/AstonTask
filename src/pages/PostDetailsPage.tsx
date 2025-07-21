import { usePosts } from "../features/PostList/model/hooks/usePosts"

export const PostDetailsPage  = () => {
    const posts = usePosts()

    return (
        <ul>
            {           
                posts.map((post, index) => 
                    <div key={index}>
                        <img src={post.img}/>
                        <div>
                            Id: {post.id}, 
                            User: {post.userId}
                        </div>
                        <h4>Post: </h4>{post.post}
                        <h4>Comment </h4>{post.comment}
                        <h4>Todos: </h4>{post.todos}
                    </div>
                )
            }
        </ul>
    )
}
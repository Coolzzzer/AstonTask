import { useCallback } from "react";
import { usePosts } from "../../features/PostList/model/hooks/usePosts"

const UserTodosPage  = () => {
    const posts = usePosts()
    const renderPostTodos = useCallback(
        (post: { todos:string}, index: number) => 
            <li key={index}>{post.todos}</li>,
        []
      )
    return (
         <ul>{posts.map(renderPostTodos)}</ul>
    )
}
export default UserTodosPage
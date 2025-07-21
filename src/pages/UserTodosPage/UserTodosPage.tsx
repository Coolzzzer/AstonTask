import { useParams } from "react-router-dom";
import { useGetTodosByUserIdQuery } from "../../entities/post/todosApi";


const UserTodosPage = () => {
    const { userId } = useParams();
    const id = Number(userId);

  const { data: todos = [], isLoading } = useGetTodosByUserIdQuery(id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {todos.map((todo) => (
        <div key={todo.id}>
            {todo.completed ? "✅" : "⬜"} {todo.title}
        </div>
      ))}
    </ul>
  );
};
export default UserTodosPage

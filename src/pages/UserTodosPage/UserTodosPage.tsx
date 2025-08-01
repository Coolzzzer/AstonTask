import { useParams } from "react-router-dom";
import { useGetTodosByUserIdQuery } from "../../entities/post/todosApi";
import { Todo } from "../../entities/todo/ui/Todo";



const UserTodosPage = () => {
    const { userId } = useParams();
    const id = Number(userId);

  const { data: todos = [], isLoading } = useGetTodosByUserIdQuery(id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
export default UserTodosPage

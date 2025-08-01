import type { FC } from "react";

type TodoProps = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
};

export const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <div style={{ margin: "10px", padding: "10px", background: "#f8f8f8", borderRadius: "4px" }}>
      {todo.completed ? "✅" : "⬜"} {todo.title}
    </div>
  );
};

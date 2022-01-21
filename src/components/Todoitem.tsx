import React from "react";
import { Todo } from "../interfaces/Todo";

interface Props {
  todo: Todo;
  completeTodo(todoNam: number): void;
}

const TodoItem = ({ todo, completeTodo}: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{todo.text}</span>
      </div>

      <button
        onClick={() => {
            completeTodo(todo.todoId);
        }}
      >
        Complete task
      </button>
    </div>
  );
};

export default TodoItem

import React, { ChangeEvent, useState } from "react";
import "./App.css";
import TodoItem from "./components/Todoitem";
import { Todo } from "./interfaces/Todo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoCount, setTodoCount] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value);
  };

  const addTodo = (): void => {
    const newTodo = { todoId: todoCount + 1, text: todo, completed: false };

    if (newTodo.text === "") {
      return;
    }

    setTodoList([...todoList, newTodo]);
    setTodo("");
    setTodoCount(todoCount + 1);
  };

  const completeTodo = (todoId: number): void => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.todoId != todoId;
      })
    );

    setTodoCount(todoCount - 1);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Todo list count: {todoCount}</h1>

        <div className="inputContainer">
          <input
            type="text"
            placeholder="Todo task here..."
            name="todo"
            value={todo}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTodo}>Add todo</button>
      </div>

      <div className="todoList">
        {todoList.map((todo: Todo, key: number) => {
          return (
            <TodoItem
              key={key}
              todo={todo}
              completeTodo={completeTodo}
            ></TodoItem>
          );
        })}
      </div>
    </div>
  );
};

export default App;

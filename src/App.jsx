import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import AllTodos from "./components/AllTodos";

function App() {
  const [todos, setTodos] = useState([]);

  // add todo
  const addTodo = (todoText) => {
    if (todoText.trim() === "") return;
    setTodos([...todos, { text: todoText, isEditing: false }]);
  };

  // delete todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // toggle edit mode
  const toggleEdit = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // update edited todo
  const updateTodo = (index, newText) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: newText, isEditing: false } :
       todo
      )
    );
  };

  return (
    <div className="app">
      <h1 className="heading">React Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <AllTodos
        todos={todos}
        deleteTodo={deleteTodo}
        toggleEdit={toggleEdit}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import Button from "./Button";

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="todo-input">
      <input
        className="input"
        type="text"
        placeholder="Enter todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button title="Add Todo" func={handleAdd} />
    </div>
  );
};

export default TodoInput;

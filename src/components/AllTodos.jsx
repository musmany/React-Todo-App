import { useState } from "react";
import Button from "./Button";

const AllTodos = ({ todos, deleteTodo, toggleEdit, updateTodo }) => {
  const [editValue, setEditValue] = useState("");

  return (
    <div className="todos-list">
      {todos.length === 0 ? (
        <p className="empty">No todos yet. Add one!</p>
      ) : (
        todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {todo.isEditing ? (
              <>
                <input
                  className="input edit-input"
                  type="text"
                  value={editValue || todo.text}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <Button
                  title="Save"
                  func={() => {
                    updateTodo(index, editValue || todo.text);
                    setEditValue("");
                  }}
                  style={{ background: "#2196f3" }}
                />
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <div className="actions">
                  <Button
                    title="✏️"
                    func={() => toggleEdit(index)}
                    style={{ background: "#ff9800" }}
                  />
                  <Button
                    title="❌"
                    func={() => deleteTodo(index)}
                    style={{ background: "#e53935" }}
                  />
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AllTodos;

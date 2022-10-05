import React, { useState } from "react";
import trash from "../../assets/trash.svg";
import edit from "../../assets/edit.svg";
function Todo({ title, id, isDone, deleteTodo, editTodo, completeTodo }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(title);

  const completeEdit = () => {
    console.log("editedTODO", editedTodo);
    editTodo(id, editedTodo);
    resetEdit();
  };

  const resetEdit = (e) => {
    setEditedTodo(title);
    setIsEditMode(false);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  return (
    <div
      onClick={() => completeTodo(id)}
      className={`todo ${isDone ? "done" : ""} `}
    >
      {isEditMode ? (
        <div>
          <input
            onChange={(e) => setEditedTodo(e.target.value)}
            value={editedTodo}
            type="text"
          />
          <button onClick={completeEdit}> v</button>
          <button onClick={resetEdit}> X</button>
        </div>
      ) : (
        <div>
          {title}
          <img onClick={handleEditClick} className="icon" src={edit}></img>
        </div>
      )}

      <img onClick={() => deleteTodo(id)} className="icon" src={trash}></img>
    </div>
  );
}

export default Todo;

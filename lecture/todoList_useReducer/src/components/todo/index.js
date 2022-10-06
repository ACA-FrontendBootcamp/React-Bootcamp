import React from "react";

function Todo({ children, id, onDelete }) {
  return (
    <div>
      {children}
      <button onClick={() => onDelete(id)}>DELETE</button>
    </div>
  );
}

export default Todo;

import React, { useReducer } from "react";
import Todo from "../todo";

const initialState = {
  input: "",
  todos: [],
  editMode: {
    todoId: "",
    isEditMode: false,
    editedTodo: "",
  },
};

const ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_INPUT: "UPDATE_INPUT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO: {
      console.log("ACTION", action.payload);
      const { id, title } = action.payload;
      return {
        ...state,
        input: "",
        todos: [
          ...state.todos,
          { id: Math.random(), title: state.input, isDone: false },
        ],
      };
    }

    case ACTION_TYPES.ADD_TODO: {
      return { ...state, input: action.payload.inputValue };
    }

    case ACTION_TYPES.UPDATE_INPUT: {
      return { ...state, input: action.payload.inputValue };
    }

    case ACTION_TYPES.DELETE_TODO: {
      const {
        payload: { id },
      } = action;
      console.log(id);
      return { ...state, todos: state.todos.filter((todo) => todo.id != id) };
    }

    default:
      return state;
  }
};

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onDelete = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: { id } });
  };

  return (
    <div>
      <input
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: ACTION_TYPES.UPDATE_INPUT,
            payload: { inputValue: e.target.value },
          })
        }
        type="text"
      />
      <button
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.ADD_TODO,
            payload: { id: Math.random(), title: state.input },
          })
        }
      >
        {" "}
        ADD
      </button>

      <div className="todoes">
        {state.todos.map((todo) => (
          <Todo onDelete={onDelete} {...todo} key={todo.id}>
            {todo.title}
          </Todo>
        ))}
      </div>
    </div>
  );
}

export default TodoList;

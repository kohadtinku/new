import React, { useReducer } from 'react';

// Initial state
const initialState = {
  todos: [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn useReducer', completed: false }
  ],
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false }
        ],
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };

    default:
      return state;
  }
}

const TodoApp = () => {
  // Using useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handler for adding a new todo
  const handleAddTodo = (text) => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
    }
  };

  // Handler for toggling the completion status of a todo
  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  // Handler for removing a todo
  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  // Handler for clearing completed todos
  const handleClearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter new todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoApp;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const addTodoHandler = (state, action) => {
  const todo = {
    id: nanoid(),
    text: action.payload,
    isDone: false, 
  };
  state.todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(state.todos)); 
};

const removeTodoHandler = (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  localStorage.setItem("todos", JSON.stringify(state.todos)); 
};

const updateTodoHandler = (state, action) => {
  const { id, newText } = action.payload;
  const updatedTodos = state.todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText } : todo
  );
  state.todos = updatedTodos;
  localStorage.setItem("todos", JSON.stringify(state.todos)); 
};

const toggleIsDoneHandler = (state, action) => {
  const { id } = action.payload;
  const updatedTodos = state.todos.map((todo) =>
    todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
  );
  state.todos = updatedTodos;
  localStorage.setItem("todos", JSON.stringify(state.todos)); 
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    updateTodo: updateTodoHandler,
    toggleIsDone: toggleIsDoneHandler,
  },
});

export const { addTodo, removeTodo, updateTodo, toggleIsDone } = todoSlice.actions;

export default todoSlice.reducer;

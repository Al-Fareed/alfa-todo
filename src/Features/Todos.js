import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo, toggleIsDone } from "../app/todoSlice";
import './Todos.css'

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const strikethrough = (index, id) => {
    dispatch(toggleIsDone({ id }));
  };

  const updatehandler = (id) => {
    const newText = prompt("Enter the text to update");
    if (newText !== null) {
      dispatch(updateTodo({ id, newText }));
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id} style={{backgroundColor: todo.isDone ? "green" : "" }}>
              {todo.text}
              <div className="li-conatiner">
                <button onClick={() => removeTodoHandler(todo.id)}>REMOVE</button>
                <button onClick={() => strikethrough(index, todo.id)}>
                  {todo.isDone ? "NOT DONE" : "DONE"}
                </button>
                <button onClick={() => updatehandler(todo.id)}>UPDATE</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

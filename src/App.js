import AddTodo from "./Features/AddTodo";
import { Todos } from "./Features/Todos";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ALFA TODO-LIST</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;

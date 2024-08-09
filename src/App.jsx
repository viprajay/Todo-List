import TodoHeader from "./components/TodoHeader";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <TodoHeader />

      <TodoAdd />
      <TodoList />
    </center>
  );
}

export default App;

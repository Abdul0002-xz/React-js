import AppName from "./Components/AppName";
import TodoItem1 from "./Components/Todoitem1";
import TodoItem2 from "./Components/TodoItem2";
import TodoItem3 from "./Components/TodoItem3";

function App() {
  return (
    <center className = "todo-container">
      <div className="container">
        <AppName />
        <div className="row kg-row">
          <TodoItem1 />
          <TodoItem2 />
          <TodoItem3 />
        </div>
      </div>
    </center>
  );
}

export default App;

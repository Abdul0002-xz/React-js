import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {

  const todoitems = [
    {
    name : "Buy Milk",
    dueDate : "4/10/2023"
  },

    {
    name : "Go to College",
    dueDate : "4/10/2023"
  },

    {
    name : "Say Abdul is best",
    dueDate : "Right Now"
  },
]

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoitems = {todoitems} />
    </center>
  );
}

export default App;
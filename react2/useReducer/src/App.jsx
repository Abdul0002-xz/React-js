import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext  } from "./store/todo-items-store";
import TodoItemsContextProvider from "./store/todo-items-store";
import "./App.css";
// import { useState } from "react";
// import { useReducer } from "react";



function App() {
  // const [todoItems, setTodoItems] = useState([]);

  

  // const AddNewItem = (itemName, itemDueDate) => {
  //   setTodoItems((currValue) => [
  //     ...currValue,
  //     { name: itemName, dueDate: itemDueDate },
  //   ]);
  // };

  // const DeleteItem = (todoItemName) => {
  //   const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
  //   setTodoItems(newTodoItems);
  // };

  // const defaulTodoItems = [
  //   {
  //     name : "Buy Ghee",
  //     dueDate : "Today"
  //   }
  // ]

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo
        // onNewItem={handleNewItem}
        />
        {/* {todoItems.length === 0 &&  */}
        <WelcomeMessage></WelcomeMessage>
        <TodoItems
        // onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

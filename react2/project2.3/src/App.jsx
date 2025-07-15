import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const AddNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const DeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  // const defaulTodoItems = [
  //   {
  //     name : "Buy Ghee",
  //     dueDate : "Today"
  //   }
  // ]

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        AddNewItem: AddNewItem,
        DeleteItem: DeleteItem,
      }}
    >
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
    </TodoItemsContext.Provider>
  );
}

export default App;

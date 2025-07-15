import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {

//  const contextObj = useContext(TodoItemsContext);
//   const todoItems = contextObj.todoItems;

const {todoItems} = useContext(TodoItemsContext);
// const {DeleteItem} = useContext(TodoItemsContext);
  

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
        key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          // onDeleteClick={DeleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
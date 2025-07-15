// import {  useRef } from "react";
import { useContext, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const {AddNewItem} = useContext(TodoItemsContext)
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  // const noOfUpdates = useRef(0);
  // const todoNameElement = useRef();
  // const dueDateElement = useRef();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    // noOfUpdates.current += 1;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    // console.log(`noOfupdates are ${noOfUpdates.current} `);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // const todoName = todoNameElement.current.value;
    // const dueDate = dueDateElement.current.value;
    // console.log(`${todoName} due on : ${dueDate}`);
    // todoNameElement.current.value = "";
    // dueDateElement.current.value = "";
    AddNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            // ref={todoNameElement}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          value={dueDate}
          // ref={dueDateElement} 
          onChange={handleDateChange}
           />
        </div>
        <div className="col-2">
          <button
            // if we dont define any type in button then it is by default is of submit type
            // type="button"
            type="submit"
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

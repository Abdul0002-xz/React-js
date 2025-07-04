import TodoItem from "./TodoItem";

const TodoItems = ({todoitems})=>{
    return (
        <div className="items-container">
            {todoitems.map((items)=>(
                <TodoItem   todoDate = {items.dueDate}  todoName= {items.name}  />
            ))}
      </div>
    );
}

export default TodoItems
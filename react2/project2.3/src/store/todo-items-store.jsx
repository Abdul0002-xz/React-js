import { createContext } from "react";

 export const TodoItemsContext = createContext({
        todoItems: [],
        AddNewItem : ()=>{},
        DeleteItem : ()=>{}
      });
import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {

  let [activeItems , setActiveItems] = useState([]);

  let onBuyButton = (item,event)=>{
      let newItems = [...activeItems , item];
      setActiveItems(newItems)
      console.log(event);
      
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item}
         foodItem={item}
         bought={activeItems.includes(item)}
        handleBuyButton={(event)=>onBuyButton(item,event)}
         />
      ))}
    </ul>
  );
};

export default FoodItems;

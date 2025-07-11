import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = [
  //   "Chawal",
  //   "Roti",
  //   "Green Vegatables",
  //   "Fruits",
  //   "Salad",
  //   "Milk",
  //   "Ghee",
  // ];
  // let foodItems = [];

  // let textStateArr = useState("Food Item entered by the user");
  // let textToShow = textStateArr[0];
  // let setStateText = textStateArr[1];

  // let [textToShow, setStateText] = useState("Enter the food item here");
  let [foodItems, setfoodItems] = useState([
    // "Chawal",
    // "Roti",
    // "Green Vegatables",
  ]);

 

  const onKeyDown = (event) => {

    if(event.key === "Enter" ){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems , newFoodItem];
      setfoodItems(newItems);
      console.log("The new food item is : " + newFoodItem);
    }

    // console.log(event);
    // setStateText(event.target.value);
  };

  

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null } */}
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        Above is the list of Healthy foods that are good for your health and
        well being
      </Container> */}
      
    </>
  );
}

export default App;

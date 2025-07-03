import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
function App() {

  let foodItems = ["Chawal" , "Roti" , "Green Vegatables" , "Fruits" , "Salad" , "Milk" , "Ghee"];
  // let foodItems = [];
  return (
    <>
      <h1>Healthy Foods</h1>
      {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null } */}
      <ErrorMessage  items = {foodItems}  />
      <FoodItems  items = {foodItems}  />
    </>
  );
}

export default App;

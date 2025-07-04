import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
function App() {
  let foodItems = [
    "Chawal",
    "Roti",
    "Green Vegatables",
    "Fruits",
    "Salad",
    "Milk",
    "Ghee",
  ];
  // let foodItems = [];
  return (
    <>
    <Container>
      <h1>Healthy Foods</h1>
      {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null } */}
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>

    <Container>
      Above is the list of Healthy foods that are good for your health and well being
    </Container>
    </>
  );
}

export default App;

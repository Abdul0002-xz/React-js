function App() {

  let foodItems = ["Dal" , "Roti" , "Green Vegatables" , "Fruits" , "Salad" , "Milk" , "Ghee"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item)=>(
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

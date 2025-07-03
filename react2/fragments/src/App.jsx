function App() {

  let foodItems = ["Dal" , "Roti" , "Green Vegatables" , "Fruits" , "Salad" , "Milk" , "Ghee"];
  // let foodItems = [];

  

  return (
    <>
      <h1>Healthy Foods</h1>
      {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null } */}
      {foodItems.length === 0 && <h3>I am still hungry</h3> }
      <ul className="list-group">
        {foodItems.map((item)=>(
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

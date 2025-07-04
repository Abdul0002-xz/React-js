const FoodInput = () => {
  const handleChangeEvent = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter your choice here"
      className="foodInput"
      onChange={(event) => handleChangeEvent(event)}
    />
  );
};

export default FoodInput;

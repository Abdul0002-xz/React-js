const FoodInput = ({handleChangeEvent}) => {
  
  return (
    <input
      type="text"
      placeholder="Enter your choice here"
      className="foodInput"
      onChange={handleChangeEvent}
    />
  );
};

export default FoodInput;

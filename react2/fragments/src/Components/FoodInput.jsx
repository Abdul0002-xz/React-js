const FoodInput = ({handleKeyDown}) => {
  
  return (
    <input
      type="text"
      placeholder="Enter your choice here"
      className="foodInput"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;

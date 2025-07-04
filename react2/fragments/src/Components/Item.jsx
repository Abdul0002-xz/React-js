import { Button } from "bootstrap";

const Item = ({ foodItem }) => {
  let handleButtonClicked = (foodItem) => {
    alert(`${foodItem} is successfully bought`);
  };

  // let {foodItem} = props; //Array destructuring method
  return (
    <li className="list-group-item">
      {foodItem}
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handleButtonClicked(foodItem)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

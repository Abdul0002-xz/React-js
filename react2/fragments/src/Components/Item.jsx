import { Button } from "bootstrap";

const Item = ({ foodItem , handleBuyButton}) => {
  
  // let handleButtonClicked = (foodItem) => {
  //   alert(`${foodItem} is successfully bought`);
  // };

  // let {foodItem} = props; //Array destructuring method
  return (
    <li className="list-group-item">
      {foodItem}
      <button
        type="button"
        className="btn btn-info"
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

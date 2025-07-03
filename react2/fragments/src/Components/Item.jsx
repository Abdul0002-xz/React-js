const Item = ({ foodItem }) => {
  // let {foodItem} = props; //Array destructuring method
  return <li className="list-group-item">{foodItem}</li>;
};

export default Item;

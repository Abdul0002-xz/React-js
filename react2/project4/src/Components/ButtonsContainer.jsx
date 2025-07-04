const ButtonContainer = () => {
  let TotalButtons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className="buttons-container">
      {TotalButtons.map((buttonItem) => (
        <button className="buttons">{buttonItem}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;

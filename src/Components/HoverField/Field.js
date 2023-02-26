import { MainField, Square } from "./Field.styled";

export const Field = ({ amount, changeCoordinates, fieldValue, fieldSize }) => {
  const handleSquareInvasion = (e) => {
    if (fieldValue === "0" || fieldSize !== fieldValue) {
      return;
    }

    e.target.classList.toggle("hovered");
    const index = e.target.dataset.index;
    const col = (index % amount) + 1 >= 1 ? (index % amount) + 1 : index + 1;
    const row = (index % amount) + 1 >= 1 ? Math.floor(index / amount + 1) : 1;
    changeCoordinates({ index, row, col });
  };

  return (
    <MainField>
      {[...Array(amount * amount)].map((_, index) => (
        <Square
          data-index={index}
          key={index}
          amount={amount}
          onMouseOver={handleSquareInvasion}
        />
      ))}
    </MainField>
  );
};

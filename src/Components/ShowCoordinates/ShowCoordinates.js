import { CoordinatesMainBox, InfoBox, Title } from "./ShowCoordinates.styled";

export const ShowCoordinates = ({ coordinates }) => {
  return (
    <CoordinatesMainBox>
      <Title>Hover squares</Title>
      {coordinates.length > 0 &&
        coordinates.map((item) => (
          <InfoBox key={item.index}>
            row {item.row} col {item.col}
          </InfoBox>
        ))}
    </CoordinatesMainBox>
  );
};

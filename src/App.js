import { useEffect, useState } from "react";
import axios from "axios";
import { ContentBox, MainBox } from "./MainContainer.styled";
import { Select } from "./Components/DifficultySelect";
import { Field } from "./Components/HoverField";
import { ShowCoordinates } from "./Components/ShowCoordinates/ShowCoordinates";

axios.defaults.baseURL = "https://6398e44229930e2bb3c4ce22.mockapi.io";

export const App = () => {
  const [difficultyOpts, setDifficultyOpts] = useState([]);
  const [err, setErr] = useState(null);
  const [fieldValue, setFieldValue] = useState(0);
  const [fieldSize, setFieldSize] = useState(5);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    axios
      .get(`/difficulty`)
      .then((res) => setDifficultyOpts(res.data))
      .catch((err) => setErr("Something went wrong, please try again 😇"));
  }, []);

  const setValue = (value) => {
    value !== "Pick mode" && setFieldValue(value);
  };

  const handleSizeChange = () => {
    setCoordinates([]);
    fieldValue && setFieldSize(fieldValue);
  };

  const handleCoordinatesChange = (inputCoordinate) => {
    const existedItem = coordinates.find(
      (item) => item.index === inputCoordinate.index
    );
    if (existedItem) {
      setCoordinates(
        coordinates.filter((item) => item.index * 1 !== existedItem.index * 1)
      );
    } else {
      setCoordinates([inputCoordinate, ...coordinates]);
    }
  };

  return (
    <MainBox>
      <ContentBox>
        <Select
          options={difficultyOpts}
          setSize={handleSizeChange}
          setValue={setValue}
          fieldValue={fieldValue}
        />
        {err ? <p>{err}</p> : null}
        <Field amount={fieldSize} changeCoordinates={handleCoordinatesChange} />
      </ContentBox>
      <ShowCoordinates coordinates={coordinates} />
    </MainBox>
  );
};

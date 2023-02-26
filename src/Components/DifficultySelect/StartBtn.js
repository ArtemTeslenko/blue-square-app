import { Button } from "./StartBtn.styled";

export const StartBtn = ({ setSize, fieldValue }) => {
  console.log(fieldValue);
  return (
    <Button type="button" onClick={setSize} disabled={fieldValue === "0"}>
      Start
    </Button>
  );
};

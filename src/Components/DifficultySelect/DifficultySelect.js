import { SelectBox, SelectField, Option } from "./DifficultySelect.styled";
import { StartBtn } from "./StartBtn";

export const Select = ({ options, setSize, setValue, fieldValue }) => {
  return (
    <SelectBox>
      <SelectField
        defaultValue={"Pick mode"}
        onChange={(e) => setValue(e.target.value)}
      >
        <Option>Pick mode</Option>
        {options.map(({ id, name, field }) => (
          <Option key={id} label={name} value={field} />
        ))}
      </SelectField>
      <StartBtn setSize={setSize} fieldValue={fieldValue} />
    </SelectBox>
  );
};

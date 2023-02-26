import styled from "styled-components";

const SelectBox = styled.div`
  width: 480px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const SelectField = styled.select`
  margin-right: 10px;
  min-width: 180px;
  font-size: 16px;
  ${({ fieldValue }) => {
    if (fieldValue === "0") {
      return `background-color: #8095a6; color: #ffffff`;
    }
  }}
`;

const Option = styled.option``;

export { SelectBox, SelectField, Option };

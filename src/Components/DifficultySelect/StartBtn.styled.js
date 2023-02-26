import styled from "styled-components";

const Button = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  color: #ffffff;
  font-size: 16px;
  background-color: #4274d4;
  border: 1px solid #4274d4;
  border-radius: 4px;
  transition: all 350ms;

  &:hover {
    transform: scale(1.1);
  }

  ${({ disabled }) =>
    disabled &&
    `background-color:#8095a6;
    &:hover {
    transform: scale(1);
  }`}
`;

export { Button };

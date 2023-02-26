import styled from "styled-components";

const MainField = styled.div`
  width: 480px;
  height: 480px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid #000000;
`;

const Square = styled.div`
  width: ${({ amount }) => `calc(100% / ${amount * 1})`};

  ${({ amount }) => {
    return `&:not(:nth-child(${amount * 1}n)) {
    border-right: 1px solid #000000;
  };
  &:not(:nth-last-child(-n + ${amount * 1})){
    border-bottom: 1px solid #000000;
  }  `;
  }}
  &.hovered {
    background-color: #4274d4;
  }
`;

export { MainField, Square };

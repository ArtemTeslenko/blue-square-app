import styled from "styled-components";

const CoordinatesMainBox = styled.div`
  height: 100vh;
  padding-left: 10px;
  padding-right: 10px;
  overflow: auto;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
`;

const InfoBox = styled.div`
  padding: 5px;
  font-weight: 600;
  color: #a0916a;
  background-color: #fef8e3;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export { CoordinatesMainBox, Title, InfoBox };

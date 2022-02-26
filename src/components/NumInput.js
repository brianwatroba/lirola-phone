import React from "react";
import styled from "styled-components";

const NumInput = ({ title, entered }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <NumEntered>{entered}</NumEntered>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  background-color: #c9c9c9;
  flex-direction: column;
`;

const NumEntered = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 1.6vh;
  color: #565656;
  align-items: center;
  justify-content: flex-end;
  border: 4px solid #9a9a9a;
  box-sizing: border-box;
  padding: 0px 4px 0px 4px;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  height: 22.5%;
  background-color: #9a9a9a;
  font-size: 1.25vh;
  color: #cfcfcf;
  justify-content: center;
  align-items: center;
`;

export default NumInput;

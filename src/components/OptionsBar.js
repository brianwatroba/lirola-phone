import React from "react";
import styled from "styled-components";

const OptionsBar = ({ left, center, right }) => {
  return (
    <Bar>
      {left && <LeftOption>{left}</LeftOption>}
      {center && <CenterOption>{center}</CenterOption>}
      {right && <RightOption>{right}</RightOption>}
    </Bar>
  );
};

const Bar = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  height: 20%;
  width: 100%;
  background-color: #9a9a9a;
  justify-content: space-between;
  align-items: center;
  // padding: 4px 10px 0px 10px;
`;

const LeftOption = styled.div`
  position: absolute;
  left: 0px;
  color: #bcdba3;
  font-size: 1vh;
  padding: 0px 6px 0px 6px;
`;

const CenterOption = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  text-align: center;
  color: #cfcfcf;
  font-size: 1vh;
  padding: 0px 6px 0px 6px;
`;

const RightOption = styled.div`
  position: absolute;
  right: 0;
  color: #ffbab4;
  font-size: 1vh;
  padding: 0px 6px 0px 6px;
`;

export default OptionsBar;

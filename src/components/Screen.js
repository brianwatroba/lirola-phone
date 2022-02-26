import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import phoneWallpaper from "../icons/phonewallpaper.png";
import batteryIcon from "../icons/battery.png";
import signalIcon from "../icons/signal.png";
import dayjs from "dayjs";
import NumInput from "./NumInput";
import OptionsBar from "./OptionsBar";

const Screen = ({ isOpen, messages, entered, loading, startingUp }) => {
  const [time, setTime] = useState(dayjs().format("h:mm"));
  return startingUp ? (
    <BootContainer>
      <BootMessage>HELO LIRO</BootMessage>
    </BootContainer>
  ) : (
    <Container>
      <StatusBar>
        <img src={batteryIcon} style={{ height: "3vh" }} alt="battery" />
        <Clock>{time}</Clock>
        <img src={signalIcon} style={{ height: "3vh" }} alt="signal" />
      </StatusBar>
      <ScreenContent>
        {!loading && <ReadyText>{messages.screen}</ReadyText>}
        {loading && (
          <>
            <StatusText>{messages.loading}</StatusText>
            <ProgressBar>
              <ProgressShown />
            </ProgressBar>
          </>
        )}
      </ScreenContent>
      {isOpen.input && (
        <Dialog>
          <NumInput title={"ENTERING:"} entered={entered} />
          <OptionsBar left={"OK"} right={"CANCEL"} />
        </Dialog>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-image: linear-gradient(rgba(170, 206, 141, 0.75), rgba(170, 206, 141, 0.75)), url(${phoneWallpaper});
`;

const FadeInOut = keyframes`
	0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
`;

const FadeIn = keyframes`
	0% { opacity:0; }
    100% { opacity:1; }
`;

const BackgroundFadeIn = keyframes`
	0% { background-color: #A5A5A5 }
    100% { background-color: rgba(170, 206, 141)}
`;

const BootContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  animation: ${BackgroundFadeIn} 4s ease-in;
`;

const ProgressAnimation = keyframes`
	0% { width: 0% }
	10% { width: 10% }
	20% { width: 20% }
	30% { width: 30% }
	40% { width: 40% }
	50% { width: 50% }
	60% { width: 60% }
	70% { width: 70% }
	80% { width: 80% }
	90% { width: 90% }
	100% { width: 100% }
`;

const ProgressBar = styled.div`
  height: 10%;
  width: 80%;
  border: 0.3vh solid #5a5a5a;
`;

const ProgressShown = styled.div`
  height: 100%;
  background-color: #5a5a5a;
  animation: ${ProgressAnimation} 1.5s;
`;

const StatusBar = styled.div`
  display: flex;
  width: auto;
  padding: 4px 8px 0px 8px;
  justify-content: space-between;
  flex-direction: row;
`;

const ScreenContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Clock = styled.div`
  display: flex;
  align-items: center;
  font-size: 1vh;
  color: #848484;
`;

const ReadyText = styled.div`
  text-align: center;
  font-size: 1.5vh;
  color: #5a5a5a;
  animation: ${FadeInOut} 2s ease-out infinite;
`;

const Dialog = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  height: 60%;
  width: 100%;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const StatusText = styled.div`
  font-size: 1.5vh;
  color: #5a5a5a;
  margin-bottom: 10%;
`;

const BootMessage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  color: #5a5a5a;
  font-size: 2vh;
  animation: ${FadeIn} 2s ease-in;
`;

export default Screen;

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import phoneWallpaper from '../icons/phonewallpaper.png';
import batteryIcon from '../icons/battery.png';
import signalIcon from '../icons/signal.png';
import dayjs from 'dayjs';
// import localeData from 'dayjs/plugin/localeData';
// dayjs.extend(localeData);

const Screen = () => {
	const [time, setTime] = useState(dayjs().format('h:mm'));
	return (
		<Container>
			<StatusBar>
				<img src={batteryIcon} height="32" alt="battery" />
				<Clock>{time}</Clock>
				<img src={signalIcon} height="32" alt="signal" />
			</StatusBar>
			<ScreenContent>
				<ReadyText>Searching...</ReadyText>
			</ScreenContent>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	background-image: linear-gradient(
			rgba(170, 206, 141, 0.75),
			rgba(170, 206, 141, 0.75)
		),
		url(${phoneWallpaper});
`;

const FadeInOut = keyframes`
	0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
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
	font-size: 1.25vh;
	color: #848484;
`;

const ReadyText = styled.div`
	font-size: 1.25vh;
	color: #5a5a5a;
	animation: ${FadeInOut} 2s ease-out infinite;
`;

export default Screen;

import React from 'react';
import styled from 'styled-components';
import signal from '../icons/signal.svg';

const LandingLoading = () => {
	return (
		<Container>
			<Name>JESSE LIROLA</Name>
			<div>
				<Image src={signal} />
			</div>
			<Title>SEARCHING...</Title>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
	padding: 10vh 0 0 0;
`;
const Name = styled.div`
	font-size: 12px;
	color: #bfbfbf;
	margin-bottom: 10%;
`;
const Image = styled.img`
	height: 75px;
	width: 75px;
	margin: 0 0 18px 0;
`;
const Title = styled.div`
	font-size: 16px;
	color: #5a5a5a;
`;

export default LandingLoading;

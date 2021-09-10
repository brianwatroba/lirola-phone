import React from 'react';
import styled from 'styled-components';
import Phone from './Phone';
import Screen from './Screen';

const Main = () => {
	return (
		<FlexContainer>
			<Phone>
				<Screen />
			</Phone>
		</FlexContainer>
	);
};

const FlexContainer = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: center;
	height: 100vh;
	width: 100%;
	background-color: #222;
`;

export default Main;

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
	display: flex;
	text-align: center;
	height: 100%;
	width: 100%;
	background-color: #222;
`;

// const Screen = styled.div`
// 	background-color: green;
// 	z-index: 10;
// 	position: absolute;
// 	width: 80%;
// 	height: 225.823px;
// 	top: 10%;
// 	left: 43.9%;
// `;

export default Main;

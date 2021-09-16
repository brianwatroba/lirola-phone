import React from 'react';
import styled from 'styled-components';
import Phone from './Phone';

import Screen from './Screen';

const Main = () => {
	return (
		// <FlexContainer>
		<Phone>
			<Screen />
		</Phone>
		// </FlexContainer>
	);
};

const FlexContainer = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	background-color: #222;
`;

export default Main;

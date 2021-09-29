import React from 'react';
import styled from 'styled-components';

const OptionsBar = ({ left, center, right }) => {
	return (
		<Bar>
			{left && <Option pos={'flex-start'}>{left}</Option>}
			{center && <Option pos={'center'}>{center}</Option>}
			{right && <Option pos={'flex-end'}>{right}</Option>}
		</Bar>
	);
};

const Bar = styled.div`
	display: flex;
	height: 20%;
	width: 100%;
	background-color: #9a9a9a;
	justify-content: space-evenly;
	align-items: center;
	// padding: 4px 10px 0px 10px;
`;

const Option = styled.div`
	justify-self: ${(props) => props.pos};
	font-size: 1vh;
	color: #cfcfcf;
	padding: 0px 8px 0px 8px;
`;

export default OptionsBar;

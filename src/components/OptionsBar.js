import React from 'react';
import styled from 'styled-components';

const OptionsBar = ({ left, right }) => {
	return (
		<Bar>
			<Option>{left}</Option>
			<Option>{right}</Option>
		</Bar>
	);
};

const Bar = styled.div`
	display: flex;
	height: 20%;
	width: 100%;
	background-color: #9a9a9a;
	justify-content: space-between;
	align-items: center;
	// padding: 4px 10px 0px 10px;
`;

const Option = styled.div`
	font-size: 1vh;
	color: #cfcfcf;
	padding: 0px 8px 0px 8px;
`;

export default OptionsBar;

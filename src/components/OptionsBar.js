import React from 'react';
import styled from 'styled-components';

const OptionsBar = ({ left, center, right }) => {
	return (
		<Bar>
			{left && <Option type={'left'}>{left}</Option>}
			{center && <Option type={'center'}>{center}</Option>}
			{right && <Option type={'right'}>{right}</Option>}
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

const Option = styled.div`
	position: absolute;
	left: ${(props) => (props.type === 'left' ? '0px' : null)};

	right: ${(props) => (props.type === 'right' ? '0px' : null)};
	left: ${(props) => (props.type === 'center' ? '0' : null)};
	right: ${(props) => (props.type === 'center' ? '0' : null)};
	margin: ${(props) => (props.type === 'center' ? '0' : null)};
	text-align: ${(props) => (props.type === 'center' ? 'center' : null)};
	font-size: 1vh;
	color: #cfcfcf;
	padding: 0px 6px 0px 6px;
`;

export default OptionsBar;

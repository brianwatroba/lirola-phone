import React from 'react';
import styled from 'styled-components';

const OptionsBar = ({ left, center, right }) => {
	return (
		<Bar>
			{left && <LeftOption type={'left'}>{left}</LeftOption>}
			{center && <CenterOption type={'center'}>{center}</CenterOption>}
			{right && <RightOption type={'right'}>{right}</RightOption>}
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

const Option = styled.div`
	position: absolute;
	left: ${(props) => (props.type === 'left' ? '0px' : null)};

	left: ${(props) => (props.type === 'center' ? '0' : null)};
	left: ${(props) => (props.type === 'center' ? '0' : null)};
	right: ${(props) => (props.type === 'right' ? '0px' : null)};
	right: ${(props) => (props.type === 'center' ? '0' : null)};
	color: ${(props) => (props.type === 'right' ? '#D8958F' : null)};
	color: ${(props) => (props.type === 'left' ? '#BCDBA3' : null)};
	#cfcfcf
	margin: ${(props) => (props.type === 'center' ? '0' : null)};
	text-align: ${(props) => (props.type === 'center' ? 'center' : null)};
	font-size: 1vh;
	padding: 0px 6px 0px 6px;
`;

export default OptionsBar;

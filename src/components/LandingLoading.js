import React from 'react';
import styled from 'styled-components';
import searchingForService from '../icons/searchingForService.svg';

const LandingLoading = () => {
	const Container = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100vh;
	`;
	const Name = styled.div`
		font-size: 36px;
	`;
	const Image = styled.img``;

	return (
		<Container>
			<Name>JESSE LIROLA</Name>
			<Image src={searchingForService} />
		</Container>
	);
};

export default LandingLoading;

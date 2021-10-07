import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import OptionsBar from './OptionsBar';
import NumInput from './NumInput';

import getVideo from '../utils/getVideo';

const Camera = ({
	isOpen,
	entered,
	videoRef,
	photoRef,
	videoContainerRef,
	hasPhoto,
}) => {
	useEffect(() => {
		getVideo(videoRef);
	}, [videoRef, photoRef]);

	return (
		<Container ref={videoContainerRef}>
			<Canvas ref={photoRef} hidden={!hasPhoto}></Canvas>
			<Video muted playsInline ref={videoRef} hidden={hasPhoto} />
			<Dialog>
				{isOpen.sending && (
					<NumInput title={'YOUR NUMBER:'} entered={entered} />
				)}
				<OptionsBar
					left={hasPhoto ? 'SEND' : null}
					center={hasPhoto ? 'RETAKE' : 'TAKE'}
					right={'CANCEL'}
				/>
			</Dialog>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow: hidden;
	text-align: center;
`;

const Dialog = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	height: 60%;
	width: 100%;
	flex-direction: column;
	justify-content: end;
	align-items: center;
`;

const Video = styled.video`
	height: 100%;
	filter: opacity(0.65) blur(1px);
`;

const lightUp = keyframes`
	0% { opacity:1; fill: #fff }
    50% { opacity:0; fill: #fff }
    100% { opacity:1;}
`;
const Canvas = styled.canvas`
	filter: opacity(0.65) blur(1px);
	animation: ${lightUp} 0.25s;
`;

export default Camera;

import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import OptionsBar from './OptionsBar';

const Camera = () => {
	const containerRef = useRef(null);
	const videoRef = useRef(null);
	const photoRef = useRef(null);
	const [hasPhoto, setHasPhoto] = useState(false);

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({
				video: { facingMode: 'user', frameRate: { max: 12 } },
				audio: false,
			})
			.then((stream) => {
				console.log(stream.getVideoTracks()[0].getSettings().frameRate);
				let video = videoRef.current;
				video.srcObject = stream;
				video.play();
			})
			.catch((err) => alert('Error occurred: ' + err));
	};

	const takePhoto = () => {
		setHasPhoto(true);
		const width = containerRef.current.clientWidth;
		const height = containerRef.current.clientHeight;

		console.log(containerRef);

		let video = videoRef.current;
		let photo = photoRef.current;
		console.log(containerRef);

		photo.width = width;
		photo.height = height;

		let ctx = photo.getContext('2d');
		ctx.drawImage(
			video,
			-(video.clientWidth - width) / 2,
			-(video.clientHeight - height),
			video.clientWidth,
			video.clientHeight
		);
	};

	useEffect(() => {
		getVideo();
	}, [videoRef, photoRef]);

	return (
		<Container ref={containerRef}>
			<Canvas ref={photoRef} hidden={!hasPhoto}></Canvas>
			<Video ref={videoRef} onClick={takePhoto} hidden={hasPhoto} />
			<Dialog>
				<OptionsBar left={'OK'} center={'TAKE'} right={'CANCEL'} />
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

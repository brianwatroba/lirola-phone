import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const Camera = () => {
	const containerRef = useRef(null);
	const videoRef = useRef(null);
	const photoRef = useRef(null);
	const [hasPhoto, setHasPhoto] = useState(false);

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({
				video: { facingMode: 'user' },
				audio: false,
			})
			.then((stream) => {
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
			<canvas ref={photoRef} hidden={!hasPhoto}></canvas>

			<Video ref={videoRef} onClick={takePhoto} hidden={hasPhoto} />
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

const Video = styled.video`
	height: 100%;
`;

export default Camera;

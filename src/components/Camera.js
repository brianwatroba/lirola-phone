import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Camera = () => {
	const videoRef = useRef(null);
	const photoRef = useRef(null);
	const [hasPhoto, setHasPhoto] = useState(false);

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({
				video: { height: 325, facingMode: 'user' },
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
		const width = 414;
		const height = width / (16 / 9);

		let video = videoRef.current;
		let photo = photoRef.current;

		photo.width = width;
		photo.height = height;

		let ctx = photo.getContext('2d');
		ctx.drawImage(video, 0, 0, width, height);
	};

	useEffect(() => {
		getVideo();
	}, [videoRef]);

	return (
		<Container>
			<canvas ref={photoRef}></canvas>

			<Video ref={videoRef} onClick={takePhoto} />
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
	// overflow: hidden;
	text-align: center;
`;

const Video = styled.video`
	height: 100%;
`;

export default Camera;

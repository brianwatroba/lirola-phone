const getVideo = (videoRef) => {
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

export default getVideo;

const getVideo = (videoRef) => {
	if (navigator.mediaDevices) {
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
			.catch((err) => {
				console.log(err);
			});
	}
};

export default getVideo;

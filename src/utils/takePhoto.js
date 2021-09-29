const takePhoto = (videoRef, photoRef, containerRef) => {
	const width = containerRef.current.clientWidth;
	const height = containerRef.current.clientHeight;

	let video = videoRef.current;
	let photo = photoRef.current;

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

export default takePhoto;

const getVideo = (videoRef, direction) => {
  if (navigator.mediaDevices) {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: direction,
          frameRate: { max: 12 },
          width: 1500,
          height: 1500,
        },
        audio: false,
      })
      .then((stream) => {
        console.log(stream);
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

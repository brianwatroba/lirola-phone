import domtoimage from "dom-to-image";

const takeScreenshot = () => {
    domtoimage
        .toJpeg(document.getElementById("root"), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement("a");
            link.download = "selfie.jpeg";
            link.href = dataUrl;
            link.click();
        });
};

export default takeScreenshot;

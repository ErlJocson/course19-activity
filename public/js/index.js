let localStream = null;

const playVideoAndAudio = () => {
  const video = document.getElementById("local");
  video.srcObject = localStream;
  video.play();
};

const generateVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      localStream = stream;
      playVideoAndAudio();
    });
};

const cameraOffOrOn = document.getElementById("off-camera");
const audioOffOrOn = document.getElementById("off-audio");

cameraOffOrOn.addEventListener("click", () => {
  localStream
    .getVideoTracks()
    .forEach((track) => (track.enabled = !track.enabled));
});

audioOffOrOn.addEventListener("click", () => {
  localStream
    .getAudioTracks()
    .forEach((track) => (track.enabled = !track.enabled));
});

generateVideo();

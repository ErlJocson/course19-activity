let localStream = null;

const generateVideo = (video, audio) => {
  navigator.mediaDevices.getUserMedia({ video, audio }).then((stream) => {
    const video = document.getElementById("local");

    video.srcObject = stream;
    video.play();
  });
};

let camera = null;
let audio = null;

const cameraOff = document.getElementById("off-camera");
const audioOff = document.getElementById("off-audio");
const cameraOn = document.getElementById("on-camera");
const audioOn = document.getElementById("on-audio");
const start = document.getElementById("start");

start.addEventListener("click", () => {
  camera = true;
  audio = true;
  generateVideo(camera, audio);
});

cameraOff.addEventListener("click", () => {
  cameraOff.style.display = "none";
  cameraOn.style.display = "flex";
  camera = false;
  generateVideo(camera, audio);
});

audioOff.addEventListener("click", () => {
  audioOff.style.display = "none";
  audioOn.style.display = "flex";
  audio = false;
  generateVideo(camera, audio);
});

cameraOn.addEventListener("click", () => {
  cameraOff.style.display = "inline";
  cameraOn.style.display = "none";
  camera = true;
  generateVideo(camera, audio);
});

audioOn.addEventListener("click", () => {
  audioOff.style.display = "inline";
  audioOn.style.display = "none";
  audio = true;
  generateVideo(camera, audio);
});

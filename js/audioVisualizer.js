// const song = {
//     src: 'bensound-betterdays.mp3'
// }

// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// const playPauseButton = document.querySelector('.play-pause');

// const canvasElement = document.querySelector('canvas');
// const canvasCtx = canvasElement.getContext('2d');

// const WIDTH = canvasElement.clientWidth;
// const HEIGHT = canvasElement.clientHeight;

// let isPlaying = false;

// let audioTrack = document.createElement('audio');

// function loadSoundTrack(song) {

//     audioTrack.src = song.src;

//     audioTrack.load();
// }

// loadSoundTrack(song);

// const source = audioCtx.createMediaElementSource(audioTrack);
// const analyser = audioCtx.createAnalyser();

// analyser.fftSize = 256;

// source.connect(analyser);
// analyser.connect(audioCtx.destination);

// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);

// function draw() {

//     analyser.getByteFrequencyData(dataArray);
//     canvasCtx.fillStyle = 'rgb(2, 2, 2)';
//     canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

//     const barWidth = (WIDTH / bufferLength) * 2.5;
//     let barHeight;
//     let x = 0;

//     for (let i = 0; i < bufferLength; i++) {
//         barHeight = dataArray[i] / 2.8;
//         canvasCtx.fillStyle = `rgb(50,50, 200)`;
//         canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

//         x += barWidth + 1;
//     }

//     requestAnimationFrame(draw);
// }

// draw();

// function togglePlayPause() {
//     audioCtx.resume().then(() => {
//         if (isPlaying === false) {
//             audioTrack.play();
//         }
//     });
// }

// playPauseButton.addEventListener('click', togglePlayPause);
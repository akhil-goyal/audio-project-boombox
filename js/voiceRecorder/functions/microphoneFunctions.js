// var chunks = [];

// let startRecording = (voiceRecorder, recordIcon, buttonStop) => {
//     voiceRecorder.start();

//     recordIcon.classList.add('active');
//     buttonStop.classList.remove('button-disabled');
// }

// let stopRecording = (voiceRecorder, recordIcon, buttonPlay, buttonDownload) => {

//     voiceRecorder.stop();

//     recordIcon.classList.remove('active');
//     buttonPlay.classList.remove('button-disabled');
//     buttonDownload.classList.remove('button-disabled');

// }

// let playRecording = () => {

//     const audioBlob = new Blob(chunks);
//     const audioUrl = URL.createObjectURL(audioBlob);
//     const audio = new Audio(audioUrl);
//     audio.play();

// }

// let downloadFile = (chunks) => {

//     const audioBlob = new Blob(chunks);
//     const audioUrl = URL.createObjectURL(audioBlob);

//     var a = document.createElement("a");
//     document.body.appendChild(a);
//     a.style = "display: none";

//     a.href = audioUrl;
//     a.download = `${Math.floor(Math.random() * 10)}.wav`;
//     a.click();
//     window.URL.revokeObjectURL(audioUrl);

// }

// export {
//     startRecording,
//     stopRecording,
//     playRecording,
//     downloadFile
// }
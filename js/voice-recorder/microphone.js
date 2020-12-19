let buttonStart = document.querySelector('#microphone-record');
let buttonStop = document.querySelector('#microphone-stop')
let buttonPlay = document.querySelector('#microphone-play');
let buttonDownload = document.querySelector('#microphone-download');

let recordIcon = document.querySelector('.icon-record');
let recordText = document.querySelector('#text-record');

let loadRecorder = async () => {

    let chunks = [];

    let audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const voiceRecorder = new MediaRecorder(audioStream);

    buttonStart.addEventListener('click', () => {

        voiceRecorder.start();

        recordIcon.classList.add('active');
        buttonStop.classList.remove('button-disabled');

    });

    voiceRecorder.addEventListener("start", () => {
        chunks = [];
    });

    voiceRecorder.addEventListener("dataavailable", (event) => {
        chunks.push(event.data);
    });

    buttonPlay.addEventListener('click', () => {

        const audioBlob = new Blob(chunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();

    });

    buttonStop.addEventListener('click', () => {

        voiceRecorder.stop();

        recordIcon.classList.remove('active');
        buttonPlay.classList.remove('button-disabled');
        buttonDownload.classList.remove('button-disabled');

    });

    buttonDownload.addEventListener('click', () => {

        const audioBlob = new Blob(chunks);
        const audioUrl = URL.createObjectURL(audioBlob);

        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";

        a.href = audioUrl;
        a.download = `${Math.floor(Math.random() * 10)}.wav`;
        a.click();
        window.URL.revokeObjectURL(audioUrl);

    });

}

window.addEventListener('load', loadRecorder);
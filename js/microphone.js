let recordingStart = document.getElementById(`recording-start`);
let recordingStop = document.getElementById(`recording-stop`);

let loadRecorder = async () => {

    let chunks = [];

    isRecording(false);

    let audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const voiceRecorder = new MediaRecorder(audioStream);

    voiceRecorder.addEventListener("start", () => {
        chunks = [];
        isRecording(true);
    })

    voiceRecorder.addEventListener("stop", () => {

        const audioBlob = new Blob(chunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();

        isRecording(false);

    })

    voiceRecorder.addEventListener("dataavailable", (event) => {
        chunks.push(event.data);
    })

    recordingStart.addEventListener(`click`, () => {
        voiceRecorder.start();
    })

    recordingStop.addEventListener(`click`, () => {
        voiceRecorder.stop();
    })
}

let isRecording = (isRecording) => {

    recordingStart.disabled = isRecording;
    recordingStop.disabled = !isRecording;

    // Border around the body
    if (isRecording) {
        document.body.classList.add(`recording`);
    } else {
        document.body.classList.remove(`recording`);
    }
}

window.addEventListener(`load`, loadRecorder);
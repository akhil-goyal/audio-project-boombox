// Fetching the id/class of various elements & assigning them in
// respective variables.
let buttonStart = document.querySelector('#microphone-record');
let buttonStop = document.querySelector('#microphone-stop')
let buttonPlay = document.querySelector('#microphone-play');
let buttonDownload = document.querySelector('#microphone-download');

let recordIcon = document.querySelector('.icon-record');
let recordText = document.querySelector('#text-record');

// Using async-await so that all the functionalities
// are enabled, once the microphone is loaded.
let loadRecorder = async () => {

    // Declaring an empty variable 'chunks'
    let chunks = [];

    // Initializing the audio input functionality by setting audio as true.
    let audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Creating an instance of MediaRecorder as voiceRecorder.
    const voiceRecorder = new MediaRecorder(audioStream);

    // When user will click on the 'record' button.
    buttonStart.addEventListener('click', () => {

        // The microphone recording has begun.
        voiceRecorder.start();

        // Setting the classes as per the requirement when
        // the 'record' button is clicked.
        recordIcon.classList.add('active');
        buttonStop.classList.remove('button-disabled');

    });

    // Using 'start' event listener for voice recorder.
    voiceRecorder.addEventListener("start", () => {

        // Emptying the chunks array so that whenever the user
        // presses the record button, the recording is started
        // from the beginning & not from where they left last time.
        chunks = [];
    });

    // Using 'datavailable' event listener which will fire up when
    // the recording is in action.
    voiceRecorder.addEventListener("dataavailable", (event) => {

        // Pushing the audio data into chunks array when the 
        // recording is going on.
        chunks.push(event.data);
    });

    // When user will click on the 'play' button.
    buttonPlay.addEventListener('click', () => {

        // Using blob to store audio file in the form of binary
        // data.
        const audioBlob = new Blob(chunks);

        // Creating a URL of the newly created audio file.
        const audioUrl = URL.createObjectURL(audioBlob);

        // Creating an instance of Web Audio API & setting the 
        // newly created URL.
        const audio = new Audio(audioUrl);

        // Playing the audio file.
        audio.play();

    });

    // When user will click on the 'stop' button.
    buttonStop.addEventListener('click', () => {

        // Stopping the voice recorder.
        voiceRecorder.stop();

        // Setting the classes as per the requirement when
        // the 'stop' button is clicked.
        recordIcon.classList.remove('active');
        buttonPlay.classList.remove('button-disabled');
        buttonDownload.classList.remove('button-disabled');

    });

    // When user will click on the 'download' button.
    buttonDownload.addEventListener('click', () => {

        // Using blob to store audio file in the form of binary
        // data.
        const audioBlob = new Blob(chunks);

        // Creating a URL of the newly created audio file.
        const audioUrl = URL.createObjectURL(audioBlob);

        // Creating a new anchor tag element.
        var a = document.createElement("a");

        // Appending the newly created anchor tag to the body.
        document.body.appendChild(a);

        // Setting its display property as none so that its not
        // visible anywhere on the page.
        a.style = "display: none";

        // Setting the anchor's href as audio's URL.
        a.href = audioUrl;

        // Providing a random name to the file with .wav extension.
        a.download = `${Math.floor(Math.random() * 10)}.wav`;

        // Setting a click event on it.
        a.click();

        // Downloading the audio file.
        window.URL.revokeObjectURL(audioUrl);

    });

}

// Adding a load event to the window so that the
// voice recorder is loaded before the user can interact with it.
window.addEventListener('load', loadRecorder);
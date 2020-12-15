import { drumBeats } from './drumBeats.js';
import { pianoNotes } from './pianoNotes.js';

var svgFile = document.getElementById('svgObject').contentDocument;

document.addEventListener('click', (event) => {

    const { innerText } = event.target;

    for (let key in drumBeats) {

        if (innerText === drumBeats[key].beat) {
            let audio = new Audio();
            audio.src = drumBeats[key].url;
            audio.play();
        }
    }

});

svgFile.addEventListener('click', (event) => {

    let { id } = event.srcElement;

    let audio = new Audio();
    audio.src = pianoNotes[id].url;
    audio.play();

});

window.addEventListener('keydown', (event) => {

    let { code } = event;

    let audio = new Audio();
    audio.src = drumBeats[code].url;
    audio.play();

});



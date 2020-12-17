import { pianoNotes } from './../../audioLists/pianoNotes.js';
import { drumBeats } from './../../audioLists/drumBeats.js';

let playPiano = (id) => {

    let audio = new Audio();
    audio.src = pianoNotes[id].url;
    audio.play();

}

let drumkitOnKeypress = (code) => {

    let audio = new Audio();
    audio.src = drumBeats[code].url;
    audio.play();

}

let drumkitOnClick = (innerText) => {

    for (let key in drumBeats) {

        if (innerText === drumBeats[key].beat) {
            let audio = new Audio();
            audio.src = drumBeats[key].url;
            audio.play();
        }
    }

}

export {
    playPiano,
    drumkitOnKeypress,
    drumkitOnClick
}
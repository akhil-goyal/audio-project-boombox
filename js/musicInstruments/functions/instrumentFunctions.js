import { pianoNotes } from './../../audioLists/pianoNotes.js';
import { drumBeats } from './../../audioLists/drumBeats.js';

let playPiano = (id) => {

    let audio = new Audio();

    audio.load();
    audio.src = pianoNotes[id].url;
    audio.play();

}

let drumkitOnKeypress = (code) => {

    let audio = new Audio();
    audio.src = drumBeats[code].url;
    audio.play();

}

let drumkitOnClick = (id) => {

    for (let key in drumBeats) {

        if (id === (drumBeats[key].beat).toLowerCase()) {
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
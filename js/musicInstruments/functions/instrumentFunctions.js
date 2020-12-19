import { pianoNotes } from './../../audioLists/pianoNotes.js';
import { drumBeats } from './../../audioLists/drumBeats.js';

let playPiano = (id) => {

    let audio = new Audio();

    audio.src = pianoNotes[id].url;
    audio.play();

}

let handleMouseEnter = (srcElement) => {

    let keyColor = srcElement.getAttribute('class');

    if (keyColor.includes('white-key')) {

        srcElement.setAttribute("style", "fill-opacity: 0.7");

    } else if (keyColor.includes('black-key')) {

        srcElement.setAttribute("style", "fill-opacity: 0.9");

    } else {

        return;

    }

}

let handleMouseLeave = (srcElement) => {

    srcElement.setAttribute("style", "fill-opacity: 1");

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
    handleMouseEnter,
    handleMouseLeave,
    drumkitOnKeypress,
    drumkitOnClick
}
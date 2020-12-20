// Importing the sounds associated to piano & drumkit functionalities.
import { pianoNotes } from '../audio-lists/piano-notes.js';
import { drumBeats } from '../audio-lists/drum-beats.js';

// Getting a list of all the drum keys with class .drumkit-beat-container
let drumKeys = document.querySelectorAll('.drumkit-beat-container');

// ------------------------------- PIANO -------------------------------------

// Function handleMouseEnter, using srcElement as an argument.
let pianoOnMouseEnter = (srcElement) => {

    // Getting the class of each 'rect' insie SVG.
    let keyColor = srcElement.getAttribute('class');

    // Checking for class with 'white-key'
    if (keyColor.includes('white-key')) {

        // Setting opacity for white key on hover.
        srcElement.setAttribute("style", "fill-opacity: 0.7");

        // Checking for class with 'black-key'
    } else if (keyColor.includes('black-key')) {

        // Setting opacity for black key on hover.
        srcElement.setAttribute("style", "fill-opacity: 0.9");

        // If none of the keys are found, return nothing.
    } else {

        return;

    }

}

// Function handleMouseLeave, using srcElement as an argument.
let pianoOnMouseLeave = (srcElement) => {

    // Setting the opacity back to 1 for both white &
    // black keys.
    srcElement.setAttribute("style", "fill-opacity: 1");

}

// Function piano, using ID as an argument.
let playPianoOnClick = (id) => {

    // Creating an instance of WebAudio API.
    let audio = new Audio();

    // Setting the path of piano note.
    audio.src = pianoNotes[id].url;

    // Playing the piano note.
    audio.play();

}
// ------------------------------------------------------------------------




// ---------------------------- DRUM-KIT ----------------------------------

// Function drumkitOnKeyPress, using code as an argument.
let drumkitOnKeyPress = (code) => {

    // Looping through the drumKeys.
    drumKeys.forEach((beat) => {

        // Checking for key's code pressed by user availability
        // in the drumBeats object.
        if (drumBeats[code].beat.toLowerCase() === beat.id) {

            // Setting the active class whenever a particular key
            // is pressed.
            beat.classList.add('active');
        }

    });

    // Creating an instance of WebAudio API.
    let audio = new Audio();

    // Setting the path of drum beat.
    audio.src = drumBeats[code].url;

    // Playing the drum beat.
    audio.play();

}

// Function drumkitOnKeyRemoval, using code as an argument.
let drumkitOnKeyRemoval = (code) => {

    // Looping through the drumKeys.
    drumKeys.forEach((beat) => {

        // Checking for key's code pressed by user availability
        // in the drumBeats object.
        if (drumBeats[code].beat.toLowerCase() === beat.id) {

            // Removing the active class whenever a particular key
            // is released.
            beat.classList.remove('active');

        }

    });

}

// Function drumkitOnClick, using id as an argument.
let drumkitOnClick = (id) => {

    // Looping through the drumBeats.
    for (let key in drumBeats) {

        // Checking for clicked id's availability in drumBeats
        if (id === (drumBeats[key].beat).toLowerCase()) {

            // Creating an instance of WebAudio API.
            let audio = new Audio();

            // Setting the path of drum beat.
            audio.src = drumBeats[key].url;

            // Playing the drum beat.
            audio.play();
        }
    }

}
// ------------------------------------------------------------------------

export {
    playPianoOnClick,
    pianoOnMouseEnter,
    pianoOnMouseLeave,
    drumkitOnKeyPress,
    drumkitOnKeyRemoval,
    drumkitOnClick
}
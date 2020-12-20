// Importing all the functions from file instrument-functions.js
import {
    playPianoOnClick,
    pianoOnMouseEnter,
    pianoOnMouseLeave,
    drumkitOnClick,
    drumkitOnKeyPress,
    drumkitOnKeyRemoval
} from './instrument-functions.js';

// ------------------------------- PIANO -------------------------------------

// Using window.load event to make sure that the Piano SVG & audio
// files are loaded into DOM before user can interact with it.
window.addEventListener('load', () => {

    // Fetching the SVG's inner document by using SVG as an object &
    // getting access to its document using .contentDocument
    let pianoSvg = document.getElementById('svgObject').contentDocument;


    // Using mouseover event to determine which element has been
    // hovered upon.
    pianoSvg.addEventListener('mouseover', (event) => {

        // Calling the function handleMouseEnter & setting setting 
        // event.srcElement as parameter.
        pianoOnMouseEnter(event.srcElement);

    });

    // Using mouseout event to determine which element was
    // hovered upon.
    pianoSvg.addEventListener('mouseout', (event) => {

        // Calling the function handleMouseLeave & setting setting 
        // event.srcElement as parameter.
        pianoOnMouseLeave(event.srcElement);

    });

    // Adding a click event listener to the ID of piano key clicked
    // by the user.
    pianoSvg.addEventListener('click', (event) => {

        // Destructuring the ID from event object.
        let { id } = event.srcElement;

        // Calling the function playPiano & setting setting ID as
        // a parameter.
        playPianoOnClick(id);

    });

});
// ------------------------------------------------------------------------




// ---------------------------- DRUM-KIT ----------------------------------

// Using the click event listener to determine which document
// element has been clicked upon.
document.addEventListener('click', (event) => {

    // Destructuring the ID from event object.
    const { id } = event.target;

    // Calling the function drumkitOnClick & setting setting ID as
    // a parameter.
    drumkitOnClick(id);

});

// Using keydown event listener to determine which key
// has been pressed.
window.addEventListener('keydown', (event) => {

    // Destructuring the code from event object.
    let { code } = event;

    // Calling the function drumkitOnKeyPress & setting setting code as
    // a parameter.
    drumkitOnKeyPress(code);

});

// Using keyup event listener to determine when the key
// has been released.
window.addEventListener('keyup', (event) => {

    // Destructuring the code from event object.
    let { code } = event;

    // Calling the function drumkitOnKeyPress & setting setting code as
    // a parameter.
    drumkitOnKeyRemoval(code);

});
// ------------------------------------------------------------------------

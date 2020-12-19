import {
    playPiano,
    handleMouseEnter,
    handleMouseLeave,
    drumkitOnClick,
    drumkitOnKeyPress,
    drumkitOnKeyRemoval
} from './functions/instrumentFunctions.js';

let pianoSvg = document.getElementById('svgObject').contentDocument;

pianoSvg.addEventListener('click', (event) => {

    let { id } = event.srcElement;

    playPiano(id);

});

pianoSvg.addEventListener('mouseover', (event) => {

    handleMouseEnter(event.srcElement);

});

pianoSvg.addEventListener('mouseout', (event) => {

    handleMouseLeave(event.srcElement);

});

document.addEventListener('click', (event) => {

    const { id } = event.target;

    drumkitOnClick(id);

});

window.addEventListener('keydown', (event) => {

    let { code } = event;

    drumkitOnKeyPress(code);

});

window.addEventListener('keyup', (event) => {

    let { code } = event;

    drumkitOnKeyRemoval(code);

})
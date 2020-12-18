import { playPiano, drumkitOnClick, drumkitOnKeypress } from './functions/instrumentFunctions.js';

let pianoSvg = document.getElementById('svgObject').contentDocument;

pianoSvg.addEventListener('click', (event) => {

    let { id } = event.srcElement;

    playPiano(id);

});

document.addEventListener('click', (event) => {

    const { id } = event.target;

    drumkitOnClick(id);

});

window.addEventListener('keydown', (event) => {

    let { code } = event;

    drumkitOnKeypress(code);

});
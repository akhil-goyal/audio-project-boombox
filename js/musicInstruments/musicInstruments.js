import { playPiano, drumkitOnClick, drumkitOnKeypress } from './functions/instrumentFunctions.js';

var pianoSvg = document.getElementById('svgObject').contentDocument;

pianoSvg.addEventListener('click', (event) => {

    let { id } = event.srcElement;

    playPiano(id);

});

document.addEventListener('click', (event) => {

    const { innerText } = event.target;

    drumkitOnClick(innerText);

});

window.addEventListener('keydown', (event) => {

    let { code } = event;

    drumkitOnKeypress(code);

});
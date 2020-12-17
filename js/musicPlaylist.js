import { musicLibrary } from './sounds/songsList.js';
import { loadSoundTrack, playSong } from './playBar.js';

let listContainer = document.querySelector('.scrollable-list');
let unorderedList = document.createElement('ul');

listContainer.appendChild(unorderedList);

musicLibrary.map((item, index) => {

    let songContainer = document.createElement('div');

    songContainer.className = 'song-container flex';

    unorderedList.appendChild(songContainer);

    ///////

    let songThumbnail = document.createElement('img');

    songThumbnail.className = 'song-thumbnail m-1';

    songThumbnail.src = item.img;

    songContainer.appendChild(songThumbnail);

    /////

    let songControls = document.createElement('div');

    songControls.className = 'song-controls grid';

    songContainer.appendChild(songControls);

    /////

    let songTitle = document.createElement('h4');

    songTitle.className = 'lead-text';

    songTitle.innerHTML = item.name;

    songControls.appendChild(songTitle);

    songTitle.addEventListener('click', () => {
        loadSoundTrack(index);
        playSong();
    });

    /////

    let playIcon = document.createElement('p');

    playIcon.id = 'playlist-button-play';

    playIcon.className = 'flex';

    playIcon.innerHTML = 'Play &#9654;'

    songControls.appendChild(playIcon);

    playIcon.addEventListener('click', () => {
        loadSoundTrack(index);
        playSong();
    });

    /////

    let waveformsContainer = document.createElement('div');

    waveformsContainer.className = 'song-waverforms';

    songControls.appendChild(waveformsContainer);

    /////

    let audioVisualizer = document.createElement('p');

    audioVisualizer.innerHTML = 'I am a container for waveforms. Here is the place where you will see magic.'

    waveformsContainer.appendChild(audioVisualizer);

});
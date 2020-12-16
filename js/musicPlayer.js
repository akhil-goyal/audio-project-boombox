import { musicLibrary } from './songsList.js';

let playBar = document.querySelector('#section-playbar');
let buttonPlay = document.querySelector('#playbar-button-play');
let buttonStop = document.querySelector('#playbar-button-stop');
let buttonPrevious = document.querySelector('#playbar-button-previous');
let buttonNext = document.querySelector('#playbar-button-next');
let buttonSlider = document.querySelector('#playbar-range');
let buttonMute = document.querySelector('#playbar-button-mute');
let songTitle = document.querySelector('#playbar-song-title');
let songThumbnail = document.querySelector('#playbar-song-thumbnail');
let songArtist = document.querySelector('#playbar-song-artist');
let currentPosition = document.querySelector('#playbar-current-time');
let totalDuration = document.querySelector('#playbar-total-duration');

let songIndex = 0;

let isPlaying = false;

let audioTrack = document.createElement('audio');

function loadSoundTrack(songIndex) {

    audioTrack.src = musicLibrary[songIndex].path;
    songTitle.innerHTML = musicLibrary[songIndex].name;
    songThumbnail.src = musicLibrary[songIndex].img;
    songArtist.innerHTML = musicLibrary[songIndex].singer;

    audioTrack.load();

}

loadSoundTrack(songIndex);


function playSong() {

    playBar.classList.add('play');
    buttonPlay.classList.remove('fa-play');
    buttonPlay.classList.add('fa-pause');

    audioTrack.play();

    isPlaying = true;
}

function pauseSong() {

    playBar.classList.remove('play');
    buttonPlay.classList.add('fa-play');
    buttonPlay.classList.remove('fa-pause');

    audioTrack.pause();

    isPlaying = false;
}

buttonPlay.addEventListener('click', () => {
    if (isPlaying === false) {
        playSong();

    } else {
        pauseSong();
    }
});

function stopSong() {

    playBar.classList.remove('play');
    buttonPlay.classList.add('fa-play');
    buttonPlay.classList.remove('fa-pause');

    audioTrack.pause();
    audioTrack.currentTime = 0;

    isPlaying = false;

}

buttonStop.addEventListener('click', () => {
    stopSong();
});

function nextSong() {
    if (songIndex < musicLibrary.length - 1) {
        songIndex += 1;
        loadSoundTrack(songIndex);
        playSong();
    } else {
        songIndex = 0;
        loadSoundTrack(songIndex);
        playSong();
    }
}

buttonNext.addEventListener('click', () => {
    nextSong();
});

function previousSong() {
    if (songIndex > 0) {
        songIndex -= 1;
        loadSoundTrack(songIndex);
        playSong();

    } else {
        songIndex = musicLibrary.length;
        loadSoundTrack(songIndex);
        playSong();
    }
}

buttonPrevious.addEventListener('click', () => {
    previousSong();
});


audioTrack.addEventListener('ended', () => {
    nextSong();
})


audioTrack.addEventListener('timeupdate', (event) => {

    const { duration, currentTime } = event.target;

    buttonSlider.max = duration;
    buttonSlider.value = currentTime;

    var h = Math.floor(currentTime / 3600);
    var m = Math.floor(currentTime % 3600 / 60);
    var s = Math.floor(currentTime % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

    currentPosition.innerHTML = hDisplay + mDisplay + sDisplay;

    var h = Math.floor(duration / 3600);
    var m = Math.floor(duration % 3600 / 60);
    var s = Math.floor(duration % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

    totalDuration.innerHTML = hDisplay + mDisplay + sDisplay;


});

function toggleMute() {

    if (buttonMute.classList.value.includes('fa-volume-up')) {

        audioTrack.volume = 0;
        buttonMute.classList.remove('fa-volume-up');
        buttonMute.classList.add('fa-volume-mute');

    } else {
        audioTrack.volume = 1;
        buttonMute.classList.remove('fa-volume-mute');
        buttonMute.classList.add('fa-volume-up');
    }

}

buttonMute.addEventListener('click', () => {
    toggleMute();
});

buttonSlider.addEventListener('click', () => {

    audioTrack.currentTime = buttonSlider.value;

});
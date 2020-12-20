// Importing the music library from songs-list.js
import { musicLibrary } from '../audio-lists/songs-list.js';

// Fetching the id/class of document elements & assigning them in
// respective variables.
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

// Setting up the starting index of the song. This will make sure that
// the first song of the array is loaded initially.
let songIndex = 0;

// Setting the isPlaying's initial value as false. This will be used
// to play/pause/stop the song.
let isPlaying = false;

// Creating a new 'audio' element.
let audioTrack = document.createElement('audio');

// Function loadSoundTrack() with songIndex as argument. For the first time,
// songIndex will always have a zero value, so that the first song loads up.
function loadSoundTrack(songIndex) {

    // Setting the song with 0 index's properties, such as, path, name,
    // img & singer.
    audioTrack.src = musicLibrary[songIndex].path;
    songTitle.innerHTML = musicLibrary[songIndex].name;
    songThumbnail.src = musicLibrary[songIndex].img;
    songArtist.innerHTML = musicLibrary[songIndex].singer;

    // Loading the audio track.
    audioTrack.load();

}

// Calling the loadSoundTrack() function & setting the songIndex as paramater.
loadSoundTrack(songIndex);

// The function playSong() will deal with the song playing functionality.
function playSong() {

    // Setting the classes as per the requirement when
    // the song begins to play.
    playBar.classList.add('play');
    buttonPlay.classList.remove('fa-play');
    buttonPlay.classList.add('fa-pause');

    // Playing the song
    audioTrack.play();

    // Setting the isPlaying value true, which signifies
    // that the song is currently in playing state.
    isPlaying = true;
}

// The function pauseSong() will deal with the song pause functionality.
function pauseSong() {

    // Setting the classes as per the requirement when
    // the song is paused.
    playBar.classList.remove('play');
    buttonPlay.classList.add('fa-play');
    buttonPlay.classList.remove('fa-pause');

    // Pausing the song
    audioTrack.pause();

    // Setting the isPlaying value false, which signifies
    // that the song is currently in non-playing state.
    isPlaying = false;
}

// Adding a click event to the play button to determine
// which button to show (play or pause) on the basis of
// the value of isPlaying.
buttonPlay.addEventListener('click', () => {

    // If the song is not playing
    if (isPlaying === false) {

        // Invoking the function playSong()
        playSong();

        // If the song is already playing.
    } else {

        // Invoking the function pauseSong()
        pauseSong();
    }
});

// The function stopSong() will deal with the song stop functionality.
function stopSong() {

    // Setting the classes as per the requirement when
    // the song is stopped.
    playBar.classList.remove('play');
    buttonPlay.classList.add('fa-play');
    buttonPlay.classList.remove('fa-pause');

    // Pausing the song.
    audioTrack.pause();

    // Setting the audio's current time as 0 so as to
    // implement the functionality of stopping the song.
    audioTrack.currentTime = 0;

    // Setting the isPlaying as false which signifies that
    // the song is currently in non-playing state.
    isPlaying = false;

}

// Adding a click event listener to the stop button.
buttonStop.addEventListener('click', () => {

    // Invoking the function stopSong()
    stopSong();
});

// The function nextSong() will deal with playing the next song functionality.
function nextSong() {

    // If the current song is the second last song in
    // the array
    if (songIndex < musicLibrary.length - 1) {

        // Incrementing its index by 1
        songIndex += 1;

        // Loading the latest song into loadSoundTrack() function.
        loadSoundTrack(songIndex);

        // Playing the song.
        playSong();

        // If the current song is the last song in 
        // the array.
    } else {

        // Setting the songIndex as 0, which means that the firs song
        // in the array will start playing.
        songIndex = 0;

        // Loading the latest song into loadSoundTrack() function.
        loadSoundTrack(songIndex);

        // Playing the song.
        playSong();
    }
}

// Adding a click event listener to the next button.
buttonNext.addEventListener('click', () => {

    // Invoking the function nextSong()
    nextSong();

});

// The function previousSong() will deal with playing the previous song functionality.
function previousSong() {

    // If the current song is not the first song in the playlist.
    if (songIndex > 0) {

        // Decrementing the songIndex by 1, which means, the index of
        // previous song is being loaded.
        songIndex -= 1;

        // Loading the latest song into loadSoundTrack() function.
        loadSoundTrack(songIndex);

        // Playing the song.
        playSong();

        // If the current song is the first song in the playlist.
    } else {

        // Setting the index of last song of the playlist by using
        // array.length
        songIndex = musicLibrary.length;

        // Loading the latest song into loadSoundTrack() function.
        loadSoundTrack(songIndex);

        // Playing the song.
        playSong();
    }
}

// Adding a click event listener to the next button.
buttonPrevious.addEventListener('click', () => {

    // Invoking the function previousSong()
    previousSong();

});

// Adding an event listener 'ended' to the audio track, which will
// keep track on the current audio being played. When the current song
// ends, it will play the next song.
audioTrack.addEventListener('ended', () => {

    // Invoking the function nextSong()
    nextSong();
});

// Adding an event 'loadeddata' to the audioTrack. It will return a 
// callback when the current song has been completely loaded.
audioTrack.addEventListener('loadeddata', (event) => {

    // Using destructuring to get current song's duration
    // from event.target
    const { duration } = event.target;

    // Setting input range's max value as the duration of current song.
    // The time is set in milli-seconds.
    buttonSlider.max = duration;

    // Displaying the duration of the current song being played.
    // Sending the value in milli-seconds to function formatTime(),
    // which will return the value in user friendly format of minutes
    // and seconds.
    totalDuration.innerHTML = (formatTime(Math.floor(duration)));

})

// Adding an event 'timeupdate' to the audioTrack. This would be used 
// to keep a track of the current timing of the song.
audioTrack.addEventListener('timeupdate', (event) => {

    // Using destructuring to get current song's timing
    // from event.target
    const { currentTime } = event.target;

    // Setting input range's value as the latest position of current song.
    // The time is set in milli-seconds.
    buttonSlider.value = currentTime;

    // Displaying the position of the current song being played.
    // Sending the value in milli-seconds to function formatTime(),
    // which will return the value in user friendly format of minutes
    // and seconds.
    currentPosition.innerHTML = (formatTime(Math.floor(currentTime)));

});

// Function formatTime will take time in milli-seconds as an argument
// and return the time in user friendly format of minutes & seconds. 
function formatTime(timeInMilliseconds) {

    // Dividing the milliseconds value by 60 to get it in minutes.
    let timeInMinutes = Math.floor((timeInMilliseconds / 60));

    // Getting the seconds by subtracting timeInMinutes (in ms) from timeInMilliseconds
    let timeInSeconds = Math.floor(timeInMilliseconds - (timeInMinutes * 60));

    // IF the time in seconds is less than 10, for example, 5, it will display
    // the time with 0 as prefix, like 05 seconds.
    if (timeInSeconds < 10) {
        timeInSeconds = `0${timeInSeconds}`;
    };

    // Returning the time in mm:ss format
    return `${timeInMinutes}:${timeInSeconds}`;
};

// The function toggleMute() will deal with muting/unmuting the song functionality.
function toggleMute() {

    // If the volume is currently un-muted.
    if (buttonMute.classList.value.includes('fa-volume-up')) {

        // Setting the volume of audioTrack to 0, this will
        // mute the song.
        audioTrack.volume = 0;

        // Setting the classes as per the requirement when
        // the song is muted.
        buttonMute.classList.remove('fa-volume-up');
        buttonMute.classList.add('fa-volume-mute');

        // If the song is currently muted.
    } else {

        // Setting the volume of audioTrack to 1, this will
        // un-mute the song.
        audioTrack.volume = 1;

        // Setting the classes as per the requirement when
        // the song is un-muted.
        buttonMute.classList.remove('fa-volume-mute');
        buttonMute.classList.add('fa-volume-up');
    }

}

// Adding an event listener of click to the mute button.
buttonMute.addEventListener('click', () => {

    // Invoking the toggleMute() function.
    toggleMute();
});

// Adding an event listener of click to the button slider.
buttonSlider.addEventListener('click', () => {

    // This will reposition the current time of audio being played
    // to the new position of slider.
    audioTrack.currentTime = buttonSlider.value;

});

export { loadSoundTrack, playSong };
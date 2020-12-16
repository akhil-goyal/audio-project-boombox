import { musicLibrary } from './songsList.js';

let playBar = document.querySelector('#section-playbar');
let buttonPlay = document.querySelector('#playbar-button-play');
let buttonStop = document.querySelector('#playbar-button-stop');
let buttonPrevious = document.querySelector('#playbar-button-previous');
let buttonNext = document.querySelector('#playbar-button-next');
let buttonSlider = document.querySelector('#playbar-range');
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

audioTrack.addEventListener('timeupdate', (event) => {

    const { duration, currentTime } = event.target;

    buttonSlider.max = duration;
    buttonSlider.value = currentTime;

    currentPosition.innerHTML = currentTime.toFixed(2);
    totalDuration.innerHTML = duration.toFixed(2);

});




















// let previous = document.querySelector('#playbar-button-previous');
// // let play = document.querySelector('#playbar-button-play');
// let next = document.querySelector('#playbar-button-next');
// let title = document.querySelector('#playbar-song-title');
// // let recent_volume= document.querySelector('#volume');
// // let volume_show = document.querySelector('#volume_show');
// let slider = document.querySelector('#duration_slider');
// let show_duration = document.querySelector('#show_duration');
// let track_image = document.querySelector('#playbar-song-thumbnail');
// // let auto_play = document.querySelector('#auto');
// // let present = document.querySelector('#present');
// // let total = document.querySelector('#total');
// // let artist = document.querySelector('#artist');

// // let timer;
// // let autoplay = 0;

// let index_no = 0;
// let Playing_song = false;

// //create a audio Element
// let track = document.createElement('audio');


// // All functions


// // function load the track
// function load_track(index_no) {

//     console.log('Loading track : ', index_no);

//     // clearInterval(timer);

//     // reset_slider();

//     track.src = musicLibrary[index_no].path;

//     console.log('Track SRC : ', track.src);

//     title.innerHTML = musicLibrary[index_no].name;

//     console.log('Track NAME: ', title.innerHTML);

//     track_image.src = musicLibrary[index_no].img;

//     console.log('Track IMAGE : ', track_image.src);

//     // artist.innerHTML = musicLibrary[index_no].singer;
//     track.load();

//     // timer = setInterval(range_slider, 1000);
//     // total.innerHTML = musicLibrary.length;
//     // present.innerHTML = index_no + 1;
// }

// load_track(index_no);


// // //mute sound function
// // function mute_sound(){
// // 	track.volume = 0;
// // 	volume.value = 0;
// // 	volume_show.innerHTML = 0;
// // }

// play.addEventListener('click', () => {
//     if (Playing_song == false) {
//         console.log('Falsey!');
//         playsong();

//     } else {
//         console.log('Truly Madly!');
//         pausesong();
//     }
// })

// // checking.. the song is playing or not
// // function justplay() {

// //     console.log('Inside Just Play!');

// //     if (Playing_song == false) {
// //         console.log('Falsey!');
// //         playsong();

// //     } else {
// //         console.log('Truly Madly!');
// //         pausesong();
// //     }
// // }

// // justplay();


// // reset song slider
// //  function reset_slider(){
// //  	slider.value = 0;
// //  }


// // change volume
// // function volume_change(){
// // 	volume_show.innerHTML = recent_volume.value;
// // 	track.volume = recent_volume.value / 100;
// // }

// // change slider position 
// function change_duration() {
//     slider_position = track.duration * (slider.value / 100);
//     track.currentTime = slider_position;
// }

// // // autoplay function
// // function autoplay_switch(){
// // 	if (autoplay==1){
// //        autoplay = 0;
// //        auto_play.style.background = "rgba(255,255,255,0.2)";
// // 	}else{
// //        autoplay = 1;
// //        auto_play.style.background = "#FF8A65";
// // 	}
// // }


// // function range_slider() {
// //     let position = 0;

// //     // update slider position
// //     if (!isNaN(track.duration)) {
// //         position = track.currentTime * (100 / track.duration);
// //         //    slider.value =  position;
// //     }


// //     // function will run when the song is over
// //     if (track.ended) {
// //         play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
// //         if (autoplay == 1) {
// //             index_no += 1;
// //             load_track(index_no);
// //             playsong();
// //         }
// //     }
// // }
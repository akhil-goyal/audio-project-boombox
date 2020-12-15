const musicData = [
    {
        songName : 'God is a woman',
        url : '/resources/audio/music/songs/eng/1.mp3'
    },
    {
        songName : 'Just the way you are',
        url : '/resources/audio/music/songs/eng/2.mp3'
    }
]


// let music_name = "/resources/audio/music/songs/eng/1.mp3"
let play_btn = document.querySelector("#playbar-button-play");
let prev_btn = document.querySelector("#playbar-button-previous");
let next_btn = document.querySelector("#playbar-button-next");
let range = document.querySelector("#playbar-range");

// let play_img = document.querySelector("#play_img")
let total_time = 0;

// let currentTime = 0;

let isPlaying = false;

let song = new Audio();

window.onload = playSong;

function playSong(){

    musicData.map((music,index) => {
        song.src = music.url;
    })

    // song.src = music_name;    
    
    play_btn.addEventListener('click',function(){
        if(!isPlaying){
            song.play();
            isPlaying = true;
            total_time = song.duration;
            range.max = total_time;
            // play_img.src = "pause.png";
        }else{
            song.pause();
            isPlaying = false;
            // play_img.src = "play.png";
        }
       song.addEventListener('ended',function(){
            song.currentTime = 0
            song.pause();
            isPlaying = false;
            range.value = 0;
            // play_img.src = "play.png";
        })
        song.addEventListener('timeupdate',function(){
            range.value = song.currentTime;
        })
        range.addEventListener('change',function(){
            song.currentTime = range.value;
        })
       
    })
}
// Importing the music library & load + play functions.
import { musicLibrary } from '../audio-lists/songs-list.js';
import { loadSoundTrack, playSong } from './play-bar.js';

// Getting the .scrollable-list div element.
let listContainer = document.querySelector('.scrollable-list');

// Creating an unordered list.
let unorderedList = document.createElement('ul');

// Creating a list item.
let listItem = document.createElement('li');

// Appending the newly created unordered list to
// the listContainer.
listContainer.appendChild(unorderedList);

// Appending the newly created list item to
// the unorderedList.
unorderedList.appendChild(listItem);

// Looping through the musicLibrary array.
musicLibrary.map((item, index) => {

    // Creating songContainer element.
    let songContainer = document.createElement('div');

    // Assigning the newly created element songContainer a class.
    songContainer.className = 'song-container flex';

    // Appending the songContainer element to unordered list.
    listItem.appendChild(songContainer);

    //////////////////////////////////////////////////////////////////

    // Creating a new songThumbnail element.
    let songThumbnail = document.createElement('img');

    // Assigning the newly created element songThumbnail a class.
    songThumbnail.className = 'song-thumbnail m-1';

    // Assigning the newly created element songThumbnail an alt text.
    songThumbnail.alt = 'Song thumbnail';

    // Assigning the src to songThumbnail from musicLibrary array.
    songThumbnail.src = item.img;

    // Appending the songThumbnail element to songContainer.
    songContainer.appendChild(songThumbnail);

    //////////////////////////////////////////////////////////////////

    // Creating a new songControls element.
    let songControls = document.createElement('div');

    // Assigning the newly created element songControls a class.
    songControls.className = 'song-controls grid';

    // Appending the songControls element to songContainer.
    songContainer.appendChild(songControls);

    //////////////////////////////////////////////////////////////////

    // Creating a new songTitle element.
    let songTitle = document.createElement('h4');

    // Assigning the newly created element songTitle a class.
    songTitle.className = 'lead-text';

    // Assigning song title to the element from musicLibrary array.
    songTitle.innerHTML = item.name;

    // Appending the songTitle element to songControls.
    songControls.appendChild(songTitle);

    // Adding a click event listener to songTitle element, on click of
    // which the playSong() function will be invoked & the respective
    // song will be played.
    songTitle.addEventListener('click', () => {

        // Invoking the loadSong() function with song index so as to
        // load the clicked song.
        loadSoundTrack(index);

        // Playing the newly loaded song.
        playSong();
    });

    //////////////////////////////////////////////////////////////////

    // Creating a new playIcon element.
    let playIcon = document.createElement('p');

    // Assigning the newly created element playIcon an id.
    playIcon.id = 'playlist-button-play';

    // Assigning the newly created element playIcon a class.
    playIcon.className = 'playnow-grid';

    // Assigning the text 'Play' as innerHTML to element playIcon.
    playIcon.innerHTML = 'Play &#9654;'

    // Appending the playIcon element to songControls.
    songControls.appendChild(playIcon);

    // Adding a click event listener to playIcon element, on click of
    // which the playSong() function will be invoked & the respective
    // song will be played.
    playIcon.addEventListener('click', () => {

        // Invoking the loadSong() function with song index so as to
        // load the clicked song.
        loadSoundTrack(index);

        // Playing the newly loaded song.
        playSong();
    });

    //////////////////////////////////////////////////////////////////

    // Creating a new singerContainer element.
    let singerContainer = document.createElement('div');

    // Assigning the newly created element singerContainer a class.
    singerContainer.className = 'song-waverforms';

    // Appending the singerContainer element to songControls.
    songControls.appendChild(singerContainer);

    //////////////////////////////////////////////////////////////////

    // Creating a new songArtist element.
    let songArtist = document.createElement('p');

    // Assigning the song Artist from array to songArtist.
    songArtist.innerHTML = item.singer;

    // Appending the songArtist element to singerContainer.
    singerContainer.appendChild(songArtist);

});
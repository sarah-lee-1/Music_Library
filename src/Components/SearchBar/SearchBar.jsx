// search bar form??
// display (song title, album, artist, genre & release date) 
// from the API within a table on the frontend.

import React, { useState } from 'react';
import './DisplayMusic.css';

const SearchMusic = (props) => {

    const [genre, setName] = useState('');
    const [artist, setName] = useState('');
    const [album, setName] = useState('');
    const [songTitle, setName] = useState('');
    const [releaseDate, setName] = useState('');

    function handleSubmit(event) {
       event.preventDefault();
       let newSong = {
           allMusic: allMusic,
           genre: genre,
           artist: artist,
           album: album,
           songTitle: songTitle,
           releaseDate: releaseDate,  
       } 
           console.log(newSong);
           props.searchSongs(newSong) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>All Music</label>
            <input type='name'></input>
            <label>Genre</label>
            <input type='name'></input>
            <label>Artist</label>
            <input type='name'></input>
            <label>Album</label>
            <input type='name'></input>
            <label>Song Title</label>
            <input type='paragraph'></input>
            <label>Release Date</label>
            <input type='date'></input>
        </form>
    )

}

export default SearchMusic; 

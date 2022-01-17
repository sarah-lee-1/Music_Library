import React, { useState } from 'react';
import './DisplayMusic.css';

const UpdateSong = (props) => {

    const [genre, setName] = useState('');
    const [artist, setName] = useState('');
    const [album, setName] = useState('');
    const [songTitle, setName] = useState('');
    const [releaseDate, setName] = useState('');

    function handleSubmit(event) {
       event.preventDefault();
       let songChange = {
            songTitle: songTitle,
            artist: artist,
            album: album,
            genre: genre,
            releaseDate: releaseDate,  
       } 
            console.log(songChange);
            props.songChange(songChange) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Song Title</label>
            <input type='paragraph'></input>
            <label>Artist</label>
            <input type='name'></input>
            <label>Album</label>
            <input type='name'></input>
            <label>Genre</label>
            <input type='name'></input>
            <label>Release Date</label>
            <input type='date'></input>
            <button onclick={Update(UpdateSong)}>
                <Update Song/>
            </button>
        </form>
    )

}

export default UpdateSong; 

import React, { useState } from 'react';
import './DisplayMusic.css';

const CreateSong = (props) => {

    const [songTitle, setName] = useState('');
    const [artist, setName] = useState('');
    const [album, setName] = useState('');
    const [genre, setName] = useState('');
    const [releaseDate, setName] = useState('');

    function handleSubmit(event) {
       event.preventDefault();
       let newSong = {
            songTitle: songTitle,
            artist: artist,
            album: album,
            genre: genre,
            releaseDate: releaseDate,  
       } 
            console.log(newSong);
            props.addNewSong(newSong) 
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
            <button type='submit' className='btn btn-primary' >Add</button>
        </form>
    )

}

export default CreateSong; 

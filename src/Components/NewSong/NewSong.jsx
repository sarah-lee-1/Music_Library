import React, { useState } from 'react';

const NewSong = (props) => {

    const [songTitle, setSongTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

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

export default NewSong; 

import React, { useState } from 'react';

const NewSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    function handleSubmit(event) {
       event.preventDefault();
       let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: releaseDate,  
       } 
            console.log(newSong);
            props.createSong(newSong); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='paragraph' onChange={(event) => setTitle(event.target.value)} value={title}/>
            <label>Artist</label>
            <input type='name' onChange={(event) => setArtist(event.target.value)} value={artist}/>
            <label>Album</label>
            <input type='name' onChange={(event) => setAlbum(event.target.value)} value={album} />
            <label>Genre</label>
            <input type='name'onChange={(event) => setGenre(event.target.value)} value={genre}/>
            <label>Release Date</label>
            <input type='date'onChange={(event) => setReleaseDate(event.target.value)} value={releaseDate}/>
            <button type="submit"> 
                Add</button>
        </form>
    )

}

export default NewSong; 
// className='btn btn-primary'>
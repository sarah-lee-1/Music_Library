// from the API within a table on the frontend.

import React, { useState } from 'react';

const SearchSong = (props) => {

    const [id, setId] = useState('');

    function handleSubmit(event) {
       event.preventDefault();
       let searchSongId = {
           id: id  
       } 
           console.log(searchSongId);
           props.searchForSong(searchSongId) 
    }

    return ( 
    <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
            {props.parentEntries.map((entry, index) => {
              return (
                <tr>
                  <td>{entry.id}</td>
                  <td>{entry.title}</td>
                  <td>{entry.artist}</td>
                  <td>{entry.album}</td>
                  <td>{entry.genre}</td>
                  <td>{entry.releaseDate}</td>
                </tr>
              );
            })}
        </tbody>
      </table> 
     );


}

export default SearchSong; 

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com');
    setSongs(response.data); 
  };


  async function createSong() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com', newSong);
    if(response.status === 201) {
      await getAllSongs;
    } 
  };
  return (
    <div>
      {/* <NavigationBar/> */}
      <SearchBar/>
      
    </div>
  )


}

export default App;

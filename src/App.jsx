import './styles.css'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import DisplayMusic from './Components/AllMusic';  
import CreateSong from './Components/NewSong/NewSong';

// import NavigationBar from './Components/NavigationBar';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data); 
  };


  async function createSong() {
    let response = await axios.get('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201) {
      await getAllSongs;
    } 
  };
  return (
    <div>
      {/* <NavigationBar/> */}
      <SearchBar/>
      <DisplayMusic parentEntries={getAllSongs}/>
      <NewSong parentEntries={createSong}/> 

      
    </div>
  )


}

export default App;

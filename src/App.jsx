import './styles.css'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/AllMusic';  
import CreateSong from './Components/NewSong/NewSong';
import UpdateSong from './Components/UpdateMusic/UpdateMusic';
import SearchSong from './Components/SearchMusic/SearchMusic'; 

// import NavigationBar from './Components/NavigationBar';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    createSong();
    searchSong();
    updateSong(); 
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

  async function searchSong() {
    let response = await axios.get('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201) {
      await getAllSongs;
    } 
  };

  async function updateSong() {
    let response = await axios.get('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201) {
      await getAllSongs;
    } 
  };

  return (
    <div>
      <NavigationBar/>
      <DisplayMusic parentEntries={getAllSongs}/>
      <NewSong parentEntries={createSong}/> 
      <SearchMusic parentEntries={searchSong}/>
      <UpdateMusic parentEntries={updateSong}/> 
    </div>
  )

}

export default App;

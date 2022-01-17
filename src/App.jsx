// import './styles.css'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/AllMusic/AllMusic';

import CreateSong from './Components/NewSong/NewSong';
import UpdateSong from './Components/UpdateMusic/UpdateMusic';
import SearchSong from './Components/SearchMusic/SearchMusic'; 
import NavBar from './Components/NavigationBar/NavigationBar';

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
    let response = await axios.get('http://127.0.0.1:8000/music/', createSong);
    if(response.status === 201) {
      await getAllSongs;
    } 
  };

  async function searchSong() {
    let response = await axios.get('http://127.0.0.1:8000/music/', searchSong);
    if(response.status === 201) {
      await getAllSongs;
    } 
  };

  async function updateSong() {
    let response = await axios.get('http://127.0.0.1:8000/music/', updateSong);
    if(response.status === 201) {
      await getAllSongs;
    } 
  };

  async function deleteBtn(id) {
    let response = await axios.get('http://127.0.0.1:8000/music/', deleteBtn);
    if(deleteMsg.confirm('Do you want to delete this entry? '))
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

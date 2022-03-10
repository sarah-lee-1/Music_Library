// import './styles.css'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/AllMusic/AllMusic';
import NavBar from './Components/NavigationBar/NavigationBar';
import NewSong from './Components/NewSong/NewSong';
import UpdateSong from './Components/UpdateSong/UpdateSong';
import SearchSong from './Components/SearchMusic/SearchMusic'; 

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs(); 
  }, [])

  async function getAllSongs() {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data); 
  };

  async function createSong(newSong) {
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201) {
      console.log("New Song Created!")
      await getAllSongs();
    } 
  };

  async function deleteSong(changeSong) {
    console.log("App.js ID: ", id)
    let response = await axios.delete(`http://127.0.0.1:8000/music/${changeSong.id}/`), changeSong;
    // if(deleteMsg.confirm('Do you want to delete this entry? '))
    if(response.status === 204) {
      console.log("song deleted!")
    await getAllSongs();
    } 
  };

  async function reviseSong(changeSong) {
    let response = await axios.put('http://127.0.0.1:8000/music/${changeSong.id}/', changeSong);
    if(response.status === 201) {
      await getAllSongs;
    } 
  };

  async function searchSong(searchSong) {
    let response = await axios.get('http://127.0.0.1:8000/music/${searchSong.id}/', searchSong);
    if(response.status === 201) {
      await getAllSongs;
    } 
  };

  return (
    <div>
      <NavBar/>
      <DisplayMusic parentEntries={songs} deleteSong={deleteSong}/>
      <NewSong parentEntries={createSong} createSong={createSong}/> 
      <UpdateSong parentEntries={reviseSong} reviseSong={reviseSong}/>
      {/* <SearchSong parentEntries={searchSong}/> */} 

    </div>
  )

}

export default App;

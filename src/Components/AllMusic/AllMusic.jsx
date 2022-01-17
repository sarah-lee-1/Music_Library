
import { useReducer } from "react";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton"; 

deleteButton(musicId) {
    if(deleteMsg.confirm('Do you want to delete this entry? '))
    {
       fetch('http://127.0.0.1:8000/music/song/' +id{
           method: 'DELETE'
           header: {'Accept': 'application/json', 
           'Content-Type': 'application/json',  
        }
       }) 
    }
}

const DisplayMusic = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Song Title</th>
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
                            <td>{entry.title}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.album}</td>
                            <td>{entry.genre}</td>
                            <td>{entry.releaseDate}</td>
                            <button>Delete</button>
                        </tr>
                    );
                })}

            </tbody>
        </table>
    )

}

export default DisplayMusic; 
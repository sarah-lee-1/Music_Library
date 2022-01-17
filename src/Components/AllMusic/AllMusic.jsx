
import { useReducer } from "react";
import LikeButton from "./LikeButton";
import Deletebtn from "./DeleteButton"

// deleteBtn(Id); {
//     if(deleteMsg.confirm('Do you want to delete this entry? '))
//     {
//        fetch('http://127.0.0.1:8000/music/song/' + id,{
//            method: 'DELETE', 
//            header: {'Accept': 'application/json', 
//            'Content-Type': 'application/json',  
//         }
//        }) 
//     }
// }

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
                        <tr key={entry.id}>
                            <td>{entry.title}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.album}</td>
                            <td>{entry.genre}</td>
                            <td>{entry.release_date}</td>
                            <button>Like</button>
                            <button onClick={() =>
                                props.deleteSong(entry.id)}
                                variant="danger"
                                className="mr-2">Delete</button>
                        </tr>
                    );
                })}

            </tbody>
        </table>
    )

}

export default DisplayMusic; 
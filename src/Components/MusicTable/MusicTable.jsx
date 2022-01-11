
const MusicTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Genre</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Song Title</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry, index) => {
                    return (
                        <td>{entry.genre}</td>
                        <td>{entry.artist}</td>
                        <td>{entry.album}</td>
                        <td>entry.songTitle</td>
                        <td>{entry.releaseDate}</td>
                    );
                })}

            </tbody>
        </table>
    )

}

export default MusicTable; 
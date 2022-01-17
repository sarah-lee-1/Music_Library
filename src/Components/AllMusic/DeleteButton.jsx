import React, {useState} from "react";
// import likebutton.css
// import "./styles.css"; 

const DeleteButton = () => {
    const [state, setState] = useState(); 

    function like() {
        setState(delete);
    }
    
    return ( 
        <>   
        <button onClick={() => 
            this.deleteSong (Song.Id)} 
            variant="danger" 
            className="mr-2">
            Delete 🤜🏻
        </button>
        <h5>{status}</h5> 
        </>
    );
}

export default DeleteButton; 
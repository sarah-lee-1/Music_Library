import React, {useState} from "react";
// import "./styles.css"; 

const DeleteBtn = () => {
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

export default DeleteBtn; 

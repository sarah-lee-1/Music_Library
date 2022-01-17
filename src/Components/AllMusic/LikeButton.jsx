import React, {useState} from "react";
// import likebutton.css
// import "./styles.css"; 

const LikeButton = () => {
    const [state, setState] = useState();
    const [status, setStatus] = useState('');

    function like() {
        setState(true);
        setStatus('Liked');

    }

    function dislike() {
        setState(false);
        setStatus('Disliked');

    }
    
    return ( 
        <>
                
        <button onClick={like} className={'toggle--button '+ (state ? 'toggle--Like': 'toggle--Unlike')}>
            Like 👍
        </button>
        <h5>{status}</h5>
        <button onClick={dislike} className={'toggle--button '+ (state ? 'toggle--Like': 'toggle--Unlike')}>
            Dislike 👎
        </button>

        </>
    );
}

export default LikeButton 
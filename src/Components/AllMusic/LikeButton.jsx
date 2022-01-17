import React, {useState} from "react";
// import likebutton.css
// import "./styles.css"; 

const LikeButton = () => {
    const [state, setState] = useState();
    const [status, setStatus] = useState('');
    const [count, setCount] = useState(0);

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
        <button onClick={like()=>setCount(count+1)}/> 
        className={'toggle--button '+ 
        (state ? 'toggle--Like': 'toggle--Unlike')}>
            Like 👍
        </button>
        <h5>{count}</h5>

        <button onClick={dislike()=>setCount(count+1)}/> 
        className={'toggle--button '+ 
        (state ? 'toggle--Like': 'toggle--Unlike')}>
            Dislike 👎
        </button>
        <h5>{count}</h5> 
        </>
    );
}

export default LikeButton 
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function Success() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [clearedState, setClearedState] = useState({feeling: 0, understanding: 0, support: 0, comments: ''});

    const clearFeedback = () => {

        dispatch({
            type: 'CLEAR_FEEDBACK',
            payload: clearedState
        })
        history.push('/')
    }

    return(
        <div>
            <h3>Success! Your feedback was submitted!</h3>
            <button onClick={clearFeedback}>Take the Feedback Quiz Again!</button>
        </div>
    )
}

export default Success;
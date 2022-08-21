import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import './Success.css';


//MUI IMPORTS
import Button from '@material-ui/core/Button';

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
        <div className="centerIt">
            <h3>Success! Your feedback was submitted!</h3>
            <Button variant="outlined" color="primary" onClick={clearFeedback}>Take the Feedback Quiz Again!</Button>
        </div>
    )
}

export default Success;
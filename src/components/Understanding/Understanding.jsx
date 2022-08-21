import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'NEW_UNDERSTANDING',
            payload: understanding
        })
        history.push('/supported')
    }

    const prevPage = () => {
        history.push('/')
    }

    return(
        <div>
            <h3>How well are you understanding the content?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                required
                placeholder="required"
                onChange={(event) => setUnderstanding(event.target.value)}
                type="number"
                />
                <button>Next</button>
            </form>
            <button onClick={prevPage}>Go Back</button>
        </div>
    )
}

export default Understanding;
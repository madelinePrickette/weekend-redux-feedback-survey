import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeelings] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'NEW_FEELING',
            payload: feeling
        })
        history.push('/understanding')
    }

    return(
        <>
            <h3>How are you feeling today?</h3>
            <form onSubmit={handleSubmit}>
                <input
                required
                placeholder="required"
                onChange={(event) => setFeelings(event.target.value)}
                type="number"
                />
                <button>Next</button>
            </form>
        </>
    )
}

export default Feeling;
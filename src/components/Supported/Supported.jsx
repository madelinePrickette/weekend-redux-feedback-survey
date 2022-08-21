import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Supported() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState(0);

    const handleSubmit = (event) => { //because this is a submit, use event
        event.preventDefault();

        dispatch({
            type: 'NEW_SUPPORT',
            payload: support
        })
        history.push('/comments')
    }

    const prevPage = () => {
        history.push('/Understanding')
    }

    return(
        <div>
            <h3>How well are you being supported?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                required
                placeholder="required"
                onChange={(event) => setSupport(event.target.value)}
                type="number"
                />
                <button>Next</button>
            </form>
            <button onClick={prevPage}>Go Back</button>
        </div>
    )
}

export default Supported;
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'NEW_COMMENT',
            payload: comments
        })
        history.push('/review')
    }

    const prevPage = () => {
        history.push('/supported')
    }
        
    return(
        <div>
            <h3>Any comments you want to leave?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="optional"
                onChange={(event) => setComments(event.target.value)}
                type="text"
                />
                <button>Next</button>
            </form>
            <button onClick={prevPage}>Go Back</button>
        </div>
    )
}

export default Comments;
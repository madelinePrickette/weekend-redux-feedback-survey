import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'NEW_COMMENT',
            payload: comment
        })
        history.push('/review')
    }
        
    return(
        <>
            <h3>Any comments you want to leave?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="optional"
                onChange={(event) => setComment(event.target.value)}
                type="text"
                />
                <button>Next</button>
            </form>
        </>
    )
}

export default Comments;
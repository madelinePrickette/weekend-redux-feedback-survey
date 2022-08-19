import {useHistory} from 'react-router-dom';

function Comments() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/review')
    }
        
    return(
        <>
            <h3>Any comments you want to leave?</h3>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Comments;
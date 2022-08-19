import {useHistory} from 'react-router-dom';

function Review() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/success')
    }
    
    return(
        <>
            <h3>Review your feedback</h3>
            <button onClick={nextPage}>Submit</button>
        </>
    )
}

export default Review;
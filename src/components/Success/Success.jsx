import {useHistory} from 'react-router-dom';

function Success() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/')
    }

    return(
        <>
            <h3>Success! Your feedback was submitted!</h3>
            <button onClick={nextPage}>Take the Feedback Quiz Again!</button>
        </>
    )
}

export default Success;
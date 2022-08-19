import {useHistory} from 'react-router-dom';

function Understanding() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/supported')
    }

    return(
        <>
            <h3>How well are you understanding the content?</h3>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Understanding;
import {useHistory} from 'react-router-dom';

function Feeling() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/understanding')
    }

    return(
        <>
            <h3>How are you feeling today?</h3>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Feeling;
import {useHistory} from 'react-router-dom';

function Supported() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/comments')
    }

    return(
        <>
            <h3>How well are you being supported?</h3>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Supported;
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'
import axios from 'axios';

function Review() {

    const history = useHistory();
    const feedbackList = useSelector(store => store.feedbackReducer)

    const submitFeedback = () => {
        console.log('posting review data to database...');
        console.log(feedbackList);

        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackList
        }).then( (response) => {
            console.log(response.data)
            history.push('/success')
        }).catch( (err) => {
            console.error('error in client post', err);
        })
    }

    const prevPage = () => {
        history.push('/comments')
    }
    
    return(
        <div>
            <h3>Review your feedback</h3>
                <li>{feedbackList.feeling}</li>
                <li>{feedbackList.understanding}</li>
                <li>{feedbackList.support}</li>
                <li>{feedbackList.comments}</li>
            <button onClick={prevPage}>Go Back</button><button onClick={submitFeedback}>Submit</button>
        </div>
    )
}

export default Review;
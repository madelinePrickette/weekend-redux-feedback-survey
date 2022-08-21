import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import './Admin.css'

function Admin() {

    const dispatch = useDispatch();

    const userFeedbackList = useSelector(store => store.userFeedbackReducer)
        
    useEffect(() => {
        getUserFeedback();
    }, [])

    const getUserFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then ( (response) => {
            console.log(response.data)
            dispatch({
                type: 'SET_USER_FEEDBACK',
                payload: (response.data)
            })
        }).catch( (err) => {
            console.error(err);
        })
    }

    return(
        <div className='entireThing'>
            <h3>Feedback Results</h3>
            {/* {JSON.stringify(userFeedbackList)} */}
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {userFeedbackList.map((user) => 
                        <tr key={user.id}>
                            <td>{user.feeling}</td>
                            <td>{user.understanding}</td>
                            <td>{user.support}</td>
                            <td>{user.comments}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;
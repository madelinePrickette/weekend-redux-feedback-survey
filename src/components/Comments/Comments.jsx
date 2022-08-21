import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import './Comments.css';


//MUI IMPORTS
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// MUI necessary function..
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comments, setComments] = useState('');

    // local state for snackbar trigger
    const [open, setOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        //MUI snackbar changing local state on click
        setOpen(true);

        dispatch({
            type: 'NEW_COMMENT',
            payload: comments
        })
    }// End of submit

    // MUI snackbar automatic close after 2 seconds
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
            setOpen(false);
        }

    // Next button to review page
    const nextPage = () => {
        history.push('/review')
    }

    // Back button to go back to the support page
    const prevPage = () => {
        history.push('/supported')
    }
        
    return(
        <div className="centerIt">
            <h3>Any comments you want to leave?</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                onChange={(event) => setComments(event.target.value)}
                type="text"
                label="optional"
                />
                <Button variant="outlined" color="primary" type="submit">Submit</Button>
            </form>
            <Button variant="outlined" onClick={prevPage}>Go Back</Button><Button variant="outlined" color="primary" onClick={nextPage}>Next</Button>
            {/* This snackbar triggers on the submit button */}
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Response submitted!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Comments;
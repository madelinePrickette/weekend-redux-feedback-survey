import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

//MUI IMPORTS
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// MUI necessary function..
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeelings] = useState(0)
    
    // local state for snackbar trigger
    const [open, setOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        //MUI snackbar changing local state on click
        setOpen(true);

        dispatch({
            type: 'NEW_FEELING',
            payload: feeling
        })
    }// End of submit

    // MUI snackbar automatic close after 2 seconds
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
            setOpen(false);
        }

    // Next button to understanding page
    const nextPage = () => {
        history.push('/understanding')
    }

    return(
        <div>
            <h3>How are you feeling today?</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                required
                onChange={(event) => setFeelings(event.target.value)}
                type="number"
                label="required"
                />
                <Button variant="outlined" color="primary" type="submit">Submit</Button>
            </form>
            <Button variant="outlined" color="primary" onClick={nextPage}>Next</Button>
            {/* This snackbar triggers on the submit button */}
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Response submitted!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Feeling;
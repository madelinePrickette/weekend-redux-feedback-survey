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

function Supported() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState(0);

    // local state for snackbar trigger
    const [open, setOpen] = useState(false);

    const handleSubmit = (event) => { //because this is a submit, use event
        event.preventDefault();

        //MUI snackbar changing local state on click
        setOpen(true);

        dispatch({
            type: 'NEW_SUPPORT',
            payload: support
        })
    }// End of submit

    // MUI snackbar automatic close after 2 seconds
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
            setOpen(false);
        }

    // Next button to comments page
    const nextPage = () => {
        history.push('/comments')
    }

    // Back button to go back to the understanding page
    const prevPage = () => {
        history.push('/understanding')
    }

    return(
        <div>
            <h3>How well are you being supported?</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                required
                onChange={(event) => setSupport(event.target.value)}
                type="number"
                label="required"
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

export default Supported;
import Snackbar from '@mui/material/Snackbar';
import { useState, useContext, useEffect } from 'react';
import { AppContext } from './AppContext';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function PositionedSnackbar() {

    const { snackBarNotif, setSnackBarNotif } = useContext(AppContext)

    const [state, setState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setState({ ...state, open: false });
        setSnackBarNotif("")
    };

    useEffect(() => {
        if (snackBarNotif !== "")
            setState({ ...state, open: true });
    }, [snackBarNotif])


    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={snackBarNotif}
                key={vertical + horizontal}
                autoHideDuration={6000}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        sx={{ p: 0.5 }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                }
            />
        </div>
    );
}
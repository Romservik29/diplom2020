import React, { useState } from 'react';
import PropTypes from 'prop-types';


// MUI Stuff
import MyButton from '../../util/MyButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

/*const styles = {
  deleteButton: {
    position: 'absolute',
    left: '90%',
    top: '10%'
  }
};*/

const DeleteButton = (props) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    const deleteFunction = () => {
        props.deleteFunc(props.id);
        setOpen(false)
    };
    return (
            <>
                <MyButton
                    tip={props.tip}
                    onClick={handleOpen}
                >
                    <DeleteOutline color="primary" />
                </MyButton>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>
                        Are you sure you want to delete this scream ?
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                    </Button>
                    <Button onClick={deleteFunction} color="primary">
                            Delete
                    </Button>
                    </DialogActions>
                </Dialog>
            </>
    )
}

DeleteButton.propTypes = {
    deleteFunc: PropTypes.func.isRequired,
    deleteId: PropTypes.string.isRequired,
    tip: PropTypes.string.isRequired
};

export default DeleteButton;

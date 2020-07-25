import React, { useState } from 'react';

// MUI Stuff
import MyButton from '../../util/MyButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

type Props = {
    deleteFunc: (deleteId: string)=>void
    deleteId:string
    title: string,
    tip: string
};
const DeleteButtonModal = (props:Props) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    const deleteFunction = () => {
        props.deleteFunc(props.deleteId);
        setOpen(false)
    };
    return (
            <>
                <MyButton
                    tip={props.tip}
                    onClick={handleOpen}
                >
                    <DeleteOutline style={{color: 'red'}} />
                </MyButton>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>
                        {props.title}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Отменить
                    </Button>
                    <Button onClick={deleteFunction} color="primary">
                            Удалить
                    </Button>
                    </DialogActions>
                </Dialog>
            </>
    )
}

export default DeleteButtonModal;

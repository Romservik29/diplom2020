import React, { useState } from 'react';
// MUI Stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import EditIcon from '@material-ui/icons/Edit';
import { useFormik } from 'formik';
import { TextField, DialogContent } from '@material-ui/core';
import MyButton from '../../util/MyButton';

type EditButtonProps = {
    changeBio: (bio:string,authorId:string)=>void
    editId: string,
    bio: string,
    authorId: string
};

const EditButton = (props:EditButtonProps) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    const handleSubmit =(values: {text:string})=>{
        props.changeBio(values.text,props.authorId)
        handleClose();
    }
    
    const formik = useFormik({
        initialValues: {
          text: props.bio,
        },
        onSubmit: values => {
          handleSubmit(values)
        },
        enableReinitialize:true,
      });

    return (
        <>
            <MyButton
                tip="Изменить"
                onClick={handleOpen}
            >
                <EditIcon style={{color:'#01f5f5'}} />
            </MyButton>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="lg"
            >

                <DialogTitle>
                    Изменение биографии
                    </DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            value={formik.values.text}
                            onChange={formik.handleChange}
                            id="text"
                            name="text"
                            type="text"
                            multiline
                            rows={25}
                            fullWidth
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Отменить
                            </Button>
                            <Button type='submit' color="primary">
                                Изменить
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default EditButton;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// MUI Stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import EditIcon from '@material-ui/icons/Edit';
import { useFormik } from 'formik';
import { TextField, DialogContent } from '@material-ui/core';
import MyButton from '../../util/MyButton';


const EditButton = (props) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    const handleSubmit =(values)=>{
        alert(JSON.stringify(values, null, 2));
        handleClose(values);
    }
    

    const formik = useFormik({
        initialValues: {
          text: '',
        },
        onSubmit: values => {
          handleSubmit(values)
        },
      });

    return (
        <>
            <MyButton
                tip={props.tip}
                onClick={handleOpen}
            >
                <EditIcon style={{color:'pink'}} />
            </MyButton>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="lg"
            >

                <DialogTitle>
                    Are you sure you want to delete this scream ?
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
EditButton.propTypes = {
    editFunc: PropTypes.func.isRequired,
    editId: PropTypes.string.isRequired,
    tip: PropTypes.string.isRequired
};


export default EditButton;
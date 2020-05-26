import React, { useState } from 'react'
import { Formik } from "formik";
import PropTypes from 'prop-types';

// MUI Stuff
import MyButton from '../../util/MyButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { TextField, DialogContent } from '@material-ui/core';

const AddButton = (props) => {
    debugger
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    const submit =(file,name)=>{
        props.addFunc(file,name)
        handleClose();
    }
    return (

        <Formik
            initialValues={{ file: undefined, name: '' }}
            onSubmit={(values) => 
                submit(values.file,values.name)
            }
            render={({
                values,
                handleSubmit,
                handleChange,
                setFieldValue
            }) => {
                return (
                    <>
                        <MyButton
                            tip={props.tip}
                            onClick={handleOpen}
                        >
                            <AddCircleOutlineIcon />
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
                            <DialogContent>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.name}
                                        fullWidth
                                    />
                                    <input
                                        id="file"
                                        name="file"
                                        type="file"
                                        onChange={event => { setFieldValue("file", event.currentTarget.files[0], false) }}
                                    />
                                    <button type='submit'>Ok</button>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Отменить
                                    </Button>
                                        <Button color='primary'>
                                            Добавить
                                    </Button>
                                    </DialogActions>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </>
                )
            }}
        />

    )
}
AddButton.propTypes = {
    addFunc: PropTypes.func.isRequired,
    addId: PropTypes.string.isRequired,
    tip: PropTypes.string.isRequired
};

export default AddButton;
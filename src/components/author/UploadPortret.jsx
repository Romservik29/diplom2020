import React, { useState } from 'react'
import { Formik } from "formik";
import PropTypes from 'prop-types';

// MUI Stuff
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/IconButton';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {DialogContent} from '@material-ui/core';

const AddButton = (props) => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    return (

        <Formik
            initialValues={{ file: undefined, name: '' }}
            onSubmit={(values) => {
                alert(
                    JSON.stringify(
                        {
                            fileName: values.file.name,
                            type: values.file.type,
                            size: `${values.file.size} bytes`
                        },
                        null,
                        2
                    )
                );
                handleClose();
            }}
            render={({
                values,
                handleSubmit,
                handleChange,
                setFieldValue
            }) => {
                return (
                    <>
                        <Button
                            tip="Добавить"
                            onClick={handleOpen}
                        >Изменить портрет
                            <AddCircleOutlineIcon />
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            fullWidth
                            maxWidth="sm"
                        >

                            <DialogTitle>
                                Загрузить портрет?
                            </DialogTitle>
                            <DialogContent>
                                <form onSubmit={handleSubmit}>
                                    <label>Выбрать портрет</label>
                                    <input
                                        id="file"
                                        name="file"
                                        type="file"
                                        onChange={event => { setFieldValue("file", event.currentTarget.files[0], false) }}
                                    />

                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Отменить
                                    </Button>
                                        <Button type="submit" color='primary'>
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
    addId: PropTypes.string.isRequired
};

export default AddButton;
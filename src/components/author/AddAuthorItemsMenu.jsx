import React, { useState } from 'react';
import { Formik } from "formik";
import {
    addAudio,
    addMovie,
    addIllustration,
    addBook,
} from '../../redux/actions/authorActions';
import { connect } from 'react-redux';
//MUI staff
import MyButton from '../../util/MyButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { TextField, DialogContent } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Menu, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types'

const AddAuthorItemsMenu = (props) => {

    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const [func, setFunc] = useState('')

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    const submit = (values, { resetForm }) => {
        switch (func) {
            case audioAddId: {
                addAudio(values.file, values.name, values.second);
                break
            }
            case bookAddId: {
                addBook(values.file, values.name, values.second);
                break
            }
            case illustrationAddId: {
                addIllustration(values.file, values.name);
                break
            }
            case movieAddId: {
                addMovie(values.name, values.second);
                break;
            }
            default: break;
        }
        resetForm({});
        handleClose();
    }

    const addAudio = (file, name, second) => {
        const formData = new FormData();
        formData.append('audio', file, file.name);
        formData.append('name', name);
        formData.append('singer', second)
        formData.append('authorId', props.authorId);
        props.addAudio(formData, props.authorId);
    }
    const addBook = (file, name, second) => {
        const formData = new FormData();
        formData.append('audio', file, file.name);
        formData.append('name', name);
        formData.append('author', second)
        formData.append('authorId', props.authorId);
        props.addBook(formData, props.authorId);
    }
    const addIllustration = (file, name) => {
        const formData = new FormData();
        formData.append('image', file, file.name);
        formData.append('name', name);
        formData.append('authorId', props.authorId);
        props.addIllustration(formData, props.authorId);
    }
    const addMovie = (name, movieId) => {
        const newMovie = {}
        newMovie.name = name;
        newMovie.movieId = movieId;
        newMovie.authorId = props.authorId
        props.addMovie(newMovie);
    }

    const handleItemAddClick = (e) => {
        const id = e.target.id;
        setFunc(id)
        handleCloseMenu()
        handleOpen()
    }

    const handleReset = (resetForm) => {

        handleClose();
        resetForm();

    }

    const audioAddId = "add-audio-author";
    const bookAddId = "add-book-author";
    const illustrationAddId = "add-illustration-author";
    const movieAddId = 'add-movie-author'
    const testAddId = 'add-test-author'
    const authorAddId = 'add-author-author'
    return (
        <Formik
            initialValues={{ file: undefined, name: '', second: '' }}
            onSubmit={submit}
            render={({
                values,
                handleSubmit,
                handleChange,
                setFieldValue,
                handleBlur,
                isSubmitting,
                resetForm
            }) => {
                return (
                    <div style={{
                        position: 'fixed',
                        bottom: '0px',
                        right: 'calc(18% - 30px)',

                    }}>
                        {props.authenticated === true
                            && <>
                                <MyButton tip="Добавить" onClick={handleClick}>
                                    <AddCircleIcon style={{ fontSize: '2.25em', color: '#9bcffd' }} />
                                </MyButton>
                                <Menu
                                    id="author-add-items-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleCloseMenu}>
                                    <MenuItem id={audioAddId} onClick={handleItemAddClick}>Аудиозапись</MenuItem>
                                    <MenuItem id={bookAddId} onClick={handleItemAddClick}>Текст</MenuItem>
                                    <MenuItem id={illustrationAddId} onClick={handleItemAddClick}>Иллюстрацию</MenuItem>
                                    <MenuItem id={testAddId} onClick={handleItemAddClick}>Тест</MenuItem>
                                    <MenuItem id={movieAddId} onClick={handleItemAddClick}>Видео</MenuItem>
                                    <MenuItem id={authorAddId} onClick={handleOpen}>Автора</MenuItem>
                                </Menu>
                            </>
                        }
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            fullWidth
                            maxWidth="sm"
                        >

                            <DialogTitle>
                                Добавить
                                {func === audioAddId ? " аудиозапись" : func === bookAddId ? " книгу"
                                    : func === illustrationAddId ? " иллюстрацию" : func === movieAddId && " видео"}
                                ?
                            </DialogTitle>
                            <DialogContent>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.name}
                                        placeholder="Название"
                                        onBlur={handleBlur}
                                        fullWidth
                                    />
                                    {(func === audioAddId || func === bookAddId || func === movieAddId) &&
                                        <TextField
                                            id="second"
                                            name="second"
                                            type="text"
                                            onChange={handleChange}
                                            value={values.second}
                                            placeholder={func === audioAddId ? "Исполнитель" : func === bookAddId ? "Писатель" : func === movieAddId && "Id видео"}
                                            onBlur={handleBlur}
                                            fullWidth
                                        />}
                                    {!(func === movieAddId) && <input
                                        id="file"
                                        name="file"
                                        type="file"
                                        onChange={event => { setFieldValue("file", event.currentTarget.files[0], false) }}
                                    />}
                                    <DialogActions>
                                        <Button onClick={handleReset.bind(null, resetForm)} color="primary">
                                            Отменить
                                </Button>
                                        <Button disable={isSubmitting} type='submit' color='primary'>
                                            Добавить
                                </Button>
                                    </DialogActions>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                )
            }}
        />

    )
}

AddAuthorItemsMenu.propTypes = {
    addBook: PropTypes.func.isRequired,
    addAudio: PropTypes.func.isRequired,
    addMovie: PropTypes.func.isRequired,
    addIllustration: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    authorId: PropTypes.string.isRequired,
}

export default connect(null, {
    addAudio,
    addMovie,
    addIllustration,
    addBook,
})(AddAuthorItemsMenu)

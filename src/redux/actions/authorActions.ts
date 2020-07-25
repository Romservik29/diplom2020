import {
    STOP_LOADING_UI,
    SET_AUTHORS,
    LOADING_UI,
    SET_ERRORS,
    SET_AUTHOR,
    DEL_AUDIO,
    DEL_BOOK,
    DEL_MOVIE,
    DEL_ILLUSTRATION,
    DEL_TEST,
    SET_ALERT,
    CLOSE_ALERT,
    ActionSetAlert,
    ActionSetAuthors
} from '../types'

import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { StateApp } from '../store'

export type Action = {
    type: typeof STOP_LOADING_UI | typeof LOADING_UI | typeof SET_ERRORS | typeof SET_AUTHOR |
    typeof DEL_AUDIO | typeof DEL_BOOK | typeof DEL_MOVIE | typeof DEL_ILLUSTRATION | typeof DEL_TEST | typeof CLOSE_ALERT
    payload?: any
} | ActionSetAlert | ActionSetAuthors

export type ThunkActionTS = ThunkAction<void, StateApp, unknown, Action>

export const getAuthors = (page = 1, limit = 6): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios.get(`/authors?page=${page}&limit=${limit}`)
        .then(res => {
            dispatch({ type: SET_AUTHORS, authors: res.data.authors })
            dispatch({ type: STOP_LOADING_UI })
        })
}
export const getAuthor = (id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .get(`/author/${id}`)
        .then(res => {
            dispatch({ type: SET_AUTHOR, payload: res.data })
            dispatch({ type: STOP_LOADING_UI })
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.message
            })
        })
}
export type Author = {
    firstName: string
    lastName: string
    midName: string
    yearOfLife: string
}
export const addAuthor = (newAuthor: Author): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/author', newAuthor)
        .then(res => {
            dispatch({ type: STOP_LOADING_UI })
            window.location.href = `/authors/${res.data.id}`
            dispatch({ type: SET_ALERT, title: 'Успех', message: 'Писатель успешно добавлен!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.message
            })
        })
}

export const uploadPortret = (formData: FormData, authorId: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post(`/author/portret`, formData)
        .then(res => {
            dispatch(getAuthor(authorId))
        })
}

export const changeBio = (bio: string, id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post(`/author/${id}/bio`, { bio })
        .then(res => {
            dispatch(getAuthor(id))
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Биография успешно изменена!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)

        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.message
            })
        })
}

export const addAudio = (formData: FormData, id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post(`/audio`, formData)
        .then(res => {
            dispatch({ type: STOP_LOADING_UI })
            dispatch(getAuthor(id))
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Аудиозапись успешно добавлена!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)


        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}
export const delAudio = (id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .delete(`/audio/${id}`)
        .then(res => {
            dispatch({ type: DEL_AUDIO, payload: id })
            dispatch({ type: STOP_LOADING_UI })
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Аудиозапись успешно удалена!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)


        })
}

export type Movie = {
    name: string
    movieId: string
    authorId: string
}
export const addMovie = (movie: Movie): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post(`/movie`, movie)
        .then(res => {
            dispatch({ type: STOP_LOADING_UI })
            dispatch(getAuthor(movie.authorId))
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Фильм успешно добавлен!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)


        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}
export const delMovie = (id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .delete(`/movie/${id}`)
        .then(res => {
            dispatch({ type: DEL_MOVIE, payload: id })
            dispatch({ type: STOP_LOADING_UI })
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Фильм успешно удалён!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)


        })
}

export const addTest = (test: any, id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post(`/author/${id}`, test)
        .then(res => {
            dispatch({ type: STOP_LOADING_UI })
            dispatch(getAuthor(id))

        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}
export const delTest = (id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .delete(`/test/${id}`)
        .then(res => {
            dispatch({ type: DEL_TEST, payload: id })
            dispatch({ type: STOP_LOADING_UI })
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Тест успешно удалён!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)


        })
}
export const addIllustration = (formData: any, id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/illustration', formData)
        .then(res => {
            dispatch({ type: STOP_LOADING_UI })
            dispatch(getAuthor(id))
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Иллюстрация успешно добавлена!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)

        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}
export const delIllustration = (id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .delete(`/illustration/${id}`)
        .then(res => {
            dispatch({ type: DEL_ILLUSTRATION, payload: id })
            dispatch({ type: STOP_LOADING_UI })
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Иллюстрация успешно удалена!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)
        })
}
export const addBook = (formData: FormData, id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/book', formData)
        .then(res => {
            dispatch({ type: STOP_LOADING_UI })
            dispatch(getAuthor(id))
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Книга успешно добавлена!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)

        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}
export const delBook = (id: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .delete(`/book/${id}`)
        .then(res => {
            dispatch({ type: DEL_BOOK, payload: id })
            dispatch({ type: STOP_LOADING_UI })
            dispatch({ type: SET_ALERT, title: 'Успех!', message: 'Книга успешно удалена!', severity: 'success' })
            setTimeout(() => dispatch({ type: CLOSE_ALERT }), 3500)

        })
}

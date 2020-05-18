import {
    SET_AUTHOR_BIO,
    LOADING_UI,
    SET_ERRORS,
    STOP_LOADING_UI,
    SET_AUTHOR,
    ADD_AUTHOR_AUDIO,
    ADD_AUTHOR_MOVIE,
    ADD_AUTHOR_ILLUSTRATION,
    ADD_AUTHOR_TEST,
    ADD_AUTHOR_TEXT
} from '../types'

import axios from 'axios'

export const getAuthor = (id) =>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .get(`author/${id}`)
    .then(res=>{
        dispatch({type: SET_AUTHOR},{payload: res.data})
        dispatch({type: STOP_LOADING_UI})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

export const setBio = (bio)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/author',bio)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: SET_AUTHOR_BIO},{bio})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}

export const addAudio = (audio)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/author',audio)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: ADD_AUTHOR_AUDIO},{audio})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const addMovie = (movie)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/author',movie)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: ADD_AUTHOR_MOVIE},{movie})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}

export const addTest = (test)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/author',test)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: ADD_AUTHOR_TEST},{test})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const addIllustration = (illustration)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/author',illustration)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: ADD_AUTHOR_ILLUSTRATION},{illustration})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const addText = (text)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/author',text)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: ADD_AUTHOR_TEXT},{text})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}

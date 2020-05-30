import {
    STOP_LOADING_UI,
    SET_AUTHOR_BIO,
    SET_AUTHORS,
    LOADING_UI,
    SET_ERRORS,
    SET_AUTHOR,
    DEL_AUDIO,
    DEL_BOOK
} from '../types'

import axios from 'axios'

export const getAuthors = (page=1,limit=6)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios.get(`/authors?page=${page}&limit=${limit}`)
    .then(res=>{
        dispatch({type: SET_AUTHORS, authors: res.data.authors})
        dispatch({type: STOP_LOADING_UI})
    })
}
export const getAuthor = (id) =>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .get(`/author/${id}`)
    .then(res=>{
        dispatch({type: SET_AUTHOR, payload: res.data})
        dispatch({type: STOP_LOADING_UI})
    })
    .catch(err=>{debugger
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        })
    })
}

export const uploadPortret = (formData,authorId)=>(dispatch)=>{
    debugger
    dispatch({type: LOADING_UI})
    axios
    .post(`/author/portret`,formData)
    .then(res=>{
        dispatch(getAuthor(authorId))
    })
}

export const setBio = (bio,id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`/author/${id}`,bio)
    .then(res=> {
        dispatch(getAuthor(id))
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        })
    }) 
}

export const addAudio = (formData) => (dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`author/audio`,formData)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(formData.authorId))
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const delAudio = (id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .delete(`/audio/${id}`)
    .then(res=>{
        dispatch({type:DEL_AUDIO, payload: id})
        dispatch({type: STOP_LOADING_UI})
    })
}
export const addMovie = (movie,id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`/author/${id}`,movie)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(id))
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}

export const addTest = (test,id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`/author/${id}`,test)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(id))
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const addIllustration = (formData)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/author/illustration',formData)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(formData.authorId))
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const addBook = (formData)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/author/text',formData)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(formData.authorId))
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const delBook = (id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .delete(`/audio/${id}`)
    .then(res=>{
        dispatch({type:DEL_BOOK, payload: id})
        dispatch({type: STOP_LOADING_UI})
    })
}

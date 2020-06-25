import {
    SET_AUDIO,
    LOADING_UI,
    SET_ERRORS,
    STOP_LOADING_UI,
    SET_ILLUSTRATION 
} from '../types'

import axios from 'axios'

export const getAudio =(page=1,limit=6)=>(dispatch)=>{
    dispatch({type:LOADING_UI})
    axios
    .get(`/audio?page=${page}&limit=${limit}`)
    .then(res=>{
        dispatch({type:SET_AUDIO, audio: res.data.audio})
        dispatch({type:STOP_LOADING_UI})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        })
    })
}

export const getIllustration =(page=1,limit=9)=>(dispatch)=>{
    dispatch({type:LOADING_UI})
    axios
    .get(`/illustration?page=${page}&limit=${limit}`)
    .then(res=>{
        dispatch({type:SET_ILLUSTRATION , illustrations: res.data.illustrations})
        dispatch({type:STOP_LOADING_UI})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        })
    })
}
import {
    SET_AUDIO,
    LOADING_UI,
    SET_ERRORS,
    STOP_LOADING_UI,
    NEXT_QUEST,
    ADD_ANSWER
} from '../types'

import axios from 'axios'

export const addAnswer =(answer)=>(dispatch)=>{
    dispatch({type: ADD_ANSWER,answer})
}

export const nextQuest =()=>(dispatch)=>{
    dispatch({type: NEXT_QUEST})
}
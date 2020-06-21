import {
    LOADING_UI,
    SET_ERRORS,
    STOP_LOADING_UI,
    NEXT_QUEST,
    ADD_ANSWER,
    SET_TEST,
    SET_TEST_RESULT
} from '../types'

import axios from 'axios'

export const getTest =(testId)=> (dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .get(`/test/${testId}`)
    .then(res=>{
        dispatch({type: SET_TEST, test: res.data})
        dispatch({type:STOP_LOADING_UI})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:SET_ERRORS, payload: err.response.err})
    })
}

export const getTestResult = (answers,testId)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`/test/${testId}`, {answers:answers})
    .then(res=>{
        dispatch({type: SET_TEST_RESULT, result: res.data})
        dispatch({type: STOP_LOADING_UI})
    })
    .catch(err=>{
        dispatch({type:SET_ERRORS, payload: err.response.data})
    })
}

export const addAnswer =(answer)=>(dispatch)=>{
    dispatch({type: ADD_ANSWER,answer})
}

export const nextQuest =()=>(dispatch)=>{
    dispatch({type: NEXT_QUEST})
}
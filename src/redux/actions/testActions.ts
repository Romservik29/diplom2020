import {
    LOADING_UI,
    SET_ERRORS,
    STOP_LOADING_UI,
    NEXT_QUEST,
    ADD_ANSWER,
    SET_TEST,
    SET_TEST_RESULT,
    RESET_TEST,
    ActionSetTest,
    ActionSetTestResult,
    ActionAddAnswer
} from '../types'

import axios from 'axios'
import { ThunkAction } from 'redux-thunk';
import { StateApp } from '../store';

type Action = {
    type: typeof LOADING_UI | typeof SET_ERRORS | typeof STOP_LOADING_UI | typeof NEXT_QUEST | typeof RESET_TEST
    payload?: any
} | ActionSetTest | ActionSetTestResult | ActionAddAnswer

type ThunkActionTS = ThunkAction<void, StateApp, unknown, Action>

export const getTest = (testId: string): ThunkActionTS => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .get(`/test/${testId}`)
        .then(res => {
            dispatch({ type: RESET_TEST })
            setTimeout(() => dispatch({ type: SET_TEST, test: res.data }), 0)
            dispatch({ type: STOP_LOADING_UI })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SET_ERRORS, payload: err.response.err })
        })
}

export const getTestResult = (answers: string[], testId: string): ThunkActionTS => (dispatch) => {
    dispatch({ type: LOADING_UI })
    setTimeout(() => axios
        .post(`/test/${testId}`, { answers: answers })
        .then(res => {
            dispatch({ type: SET_TEST_RESULT, result: res.data })
            dispatch({ type: STOP_LOADING_UI })
        })
        .catch(err => {
            dispatch({ type: SET_ERRORS, payload: err.response.data })
        }), 0)
}

export const addAnswer = (answer: string): ThunkActionTS => (dispatch) => {
    dispatch({ type: ADD_ANSWER, answer })
}

export const nextQuest = (): ThunkActionTS => (dispatch) => {
    dispatch({ type: NEXT_QUEST })
}
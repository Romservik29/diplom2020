import {
    SET_AUDIO,
    LOADING_UI,
    SET_ERRORS,
    STOP_LOADING_UI,
    SET_ILLUSTRATION
} from '../types'

import axios from 'axios'
import { ThunkAction } from 'redux-thunk';
import { StateApp } from '../store';

type Action = {
    type: typeof STOP_LOADING_UI | typeof LOADING_UI | typeof SET_ERRORS | typeof SET_AUDIO | typeof SET_ILLUSTRATION
    illustration?: any[]
    payload?: any
}

type ThunkActionTS = ThunkAction<void, StateApp, unknown, Action>

export const getIllustration = (page = 1, limit = 9): ThunkActionTS => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .get(`/illustration?page=${page}&limit=${limit}`)
        .then(res => {
            dispatch({ type: SET_ILLUSTRATION, illustrations: res.data.illustrations })
            dispatch({ type: STOP_LOADING_UI })
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.message
            })
        })
}
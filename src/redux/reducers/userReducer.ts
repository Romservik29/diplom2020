import {
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    SET_USER,
    LOADING_USER,
    STOP_LOADING_USER,
} from '../types'

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
}

export type UserState = typeof initialState

export default function (state = initialState, action:any):UserState {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState
        case SET_USER:
            return {
                authenticated: true,
                ...action.payload
            }
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING_USER:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
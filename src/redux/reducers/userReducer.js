import {
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    SET_USER,
    /*LOADING_USER,
    MARK_NOTIFICATION,
    LOADING_UI,
    CLEAR_ERRORS,
    SET_ERRORS*/
} from '../types'

const initialState = {
    authenticated: false,
    credentials: {},
    notification:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return{
                ...state,
                authenticated:true
            };
        case SET_UNAUTHENTICATED:
            return initialState
        case SET_USER:
            return{
                authenticated: true,
                ...action.payload
            }    
        default: 
            return state
    }
}
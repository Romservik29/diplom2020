import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI, SET_ALERT, CLOSE_ALERT} from '../types'

const initialState = {
    loading: false,
    errors: null,
    isAlert: false,
    titleAlert: '',
    messageAlert:'',
    severityAlert: 'info'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            }
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            };
        case SET_ALERT:
            return {
                ...state,
                isAlert: true,
                titleAlert: action.title,
                messageAlert: action.message,
                severityAlert: action.severity
            }
        case CLOSE_ALERT:
            return {
                ...state,
                isAlert: false
            }
        default: return state
    }
}
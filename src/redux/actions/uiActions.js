import {
    CLOSE_ALERT
} from '../types'

export const closeAlert = (userData, history) => (dispatch) => {
    dispatch({ type: CLOSE_ALERT })
}


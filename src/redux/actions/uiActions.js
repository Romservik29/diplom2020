import {
    CLOSE_ALERT
} from '../types'

import axios from 'axios'

export const closeAlert = (userData, history) => (dispatch) => {
    dispatch({ type: CLOSE_ALERT })
}


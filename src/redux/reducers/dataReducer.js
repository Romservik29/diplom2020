import { SET_AUDIO } from '../types'

const initialState = {
    audio: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUDIO:
            return {
                ...state,
                audio: [...action.audio]
            }
        default: return state
    }
}
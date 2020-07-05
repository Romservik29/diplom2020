import { SET_AUDIO,SET_ILLUSTRATION } from '../types'

const initialState = {
    audio: [],
    illustrations:[]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUDIO:
            return {
                ...state,
                audio: [...action.audio]
            }
            case SET_ILLUSTRATION :
                return{
                ...state,
                illustrations: [...action.illustrations]
            }
        default: return state
    }
}
import { SET_AUDIO,SET_ILLUSTRATION } from '../types'


const initialState = {
    audio: [] as any,
    illustrations:[] as any
}

export type DataState = typeof initialState;


export default function (state = initialState, action:any):DataState {
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
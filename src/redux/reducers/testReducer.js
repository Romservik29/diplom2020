import {
    SET_TEST,
    NEXT_QUEST,
    ADD_ANSWER,
    SET_TEST_RESULT
} from '../types'

const initialState = {
    test: {
        title: '',
        questions: [{
            question: "0",
            answers: [""]
        }]
    },
    currentQuestion: 0,
    answers: [],
    result: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TEST:
            return {
                ...state,
                test: action.test.test
            }
        case ADD_ANSWER:
            return {
                ...state,
                answers: [...state.answers, action.answer]
            }
        case NEXT_QUEST:
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1
            }
        case SET_TEST_RESULT:
            return {
                ...state,
                result: [...state.result, action.result]
            }
        default: return state
    }
}
import {
    SET_TEST,
    NEXT_QUEST,
    ADD_ANSWER,
} from '../types'

const initialState = {
    test: {
        title: "Hi",
        questions: [
            {
                question: "Сколько лет пети?",
                answers: ["1", "2", "3"]
            },
            {
                question: "Сколько лет васи?",
                answers: ["4", "5", "6"]
            },
            {
                question: "Сколько лет васи?",
                answers: ["7", "8", "9"]
            },
            {
                question: "Сколько лет васи?",
                answers: ["10", "11", "12"]
            },
            {
                question: "Сколько лет васи?",
                answers: ["13", "14", "15"]
            }
        ]
    },
    currentQuestion: 0,
    answers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TEST:
            return {
                ...state,
                test: [...action.test]
            }
        case ADD_ANSWER:
            return {
                ...state,
                answers: [...state.answers,action.answer]
            }
        case NEXT_QUEST:
            return {
                ...state,
                currentQuestion: state.currentQuestion+1
            }
        default: return state
    }
}
import {
    SET_AUTHOR_BIO,
    SET_AUTHOR,
    ADD_AUTHOR_AUDIO,
    ADD_AUTHOR_MOVIE,
    ADD_AUTHOR_ILLUSTRATION,
    ADD_AUTHOR_TEST,
    ADD_AUTHOR_TEXT
} from '../types'

const initialState = {
    author: {
        firstName:'',
        lastName:'',
        midName:'',
        portretUrl:'',
        yearOfLife:'',
        bio:'',
        audio:[],
        movies:[],
        illustrations:[],
        tests:[],
        books:[]
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_AUTHOR:
            return {
                ...state,
                author: action.payload
            }
        case SET_AUTHOR_BIO: return{
            ...state,
            ...state.author,
            bio: action.bio
        }
        case ADD_AUTHOR_AUDIO: return{
            ...state,
            ...state.author,
            audio: [...state.author.audio, action.audio]
        }
        case ADD_AUTHOR_MOVIE: return{
            ...state,
            ...state.author,
            movies: [...state.author.movies, action.movie]
        }
        case ADD_AUTHOR_ILLUSTRATION: return{
            ...state,
            ...state.author,
            illustrations: [...state.author.illustrations, action.illustration]
        }
        case ADD_AUTHOR_TEST: return{
            ...state,
            ...state.author,
            tests: [...state.author.tests, action.test]
        }
        case ADD_AUTHOR_TEXT: return{
            ...state,
            ...state.author,
            books: [...state.author.books, action.book]
        }        
        

        default: return state
    }
}
import {
    SET_AUTHOR_BIO,
    SET_AUTHOR,
    ADD_AUTHOR_AUDIO,
    ADD_AUTHOR_MOVIE,
    ADD_AUTHOR_ILLUSTRATION,
    ADD_AUTHOR_TEST,
    ADD_AUTHOR_TEXT,
    DEL_AUTHOR_AUDIO,
    DEL_AUTHOR_MOVIE,
    DEL_AUTHOR_ILLUSTRATION,
    DEL_AUTHOR_TEST,
    DEL_AUTHOR_TEXT
} from '../types'

const initialState = {
    author: {
        authorId: '',
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
        case DEL_AUTHOR_AUDIO: 
        let index = state.author.audio.findIndex(
            (audio) => audio.id === action.payload
        )
        state.author.audio.splice(index,1)
        return{
            ...state
        }
        case DEL_AUTHOR_MOVIE: 
        index = state.author.movies.findIndex(
            (movies) => movies.id === action.payload
        )
        state.author.movies.splice(index,1)
        return{
            ...state
        }
        case DEL_AUTHOR_ILLUSTRATION: 
        index = state.author.illustrations.findIndex(
            (illustrations) => illustrations.id === action.payload
        )
        state.author.illustrations.splice(index,1)
        return{
            ...state
        }
        case DEL_AUTHOR_TEST:  
        index = state.author.tests.findIndex(
            (tests) => tests.id === action.payload
        )
        state.author.tests.splice(index,1)
        return{
            ...state
        }
        case DEL_AUTHOR_TEXT: 
        index = state.author.texts.findIndex(
            (texts) => texts.id === action.payload
        )
        state.author.texts.splice(index,1)
        return{
            ...state
        }      
        

        default: return state
    }
}
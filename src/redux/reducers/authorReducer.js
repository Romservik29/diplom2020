import {
    SET_AUTHOR_BIO,
    SET_AUTHOR,
    DEL_AUDIO,
    DEL_MOVIE,
    DEL_ILLUSTRATION,
    DEL_TEST,
    DEL_BOOK,
    SET_AUTHORS
} from '../types'

const initialState = {
    authors:[],
    author: {
        id: '',
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
    let index;
    switch(action.type){
        case SET_AUTHORS:
            return {
                ...state,
                authors: [...action.authors]
            }
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
        case DEL_AUDIO: 
        index = state.author.audio.findIndex(
            (audio) => audio.id === action.payload
        )
        state.author.audio.splice(index,1)
        return{
            ...state
        }
        case DEL_MOVIE: 
        index = state.author.movies.findIndex(
            (movies) => movies.id === action.payload
        )
        state.author.movies.splice(index,1)
        return{
            ...state
        }
        case DEL_ILLUSTRATION: 
        index = state.author.illustrations.findIndex(
            (illustrations) => illustrations.id === action.payload
        )
        state.author.illustrations.splice(index,1)
        return{
            ...state
        }
        case DEL_TEST:  
        index = state.author.tests.findIndex(
            (tests) => tests.id === action.payload
        )
        state.author.tests.splice(index,1)
        return{
            ...state
        }
        case DEL_BOOK:
        index = state.author.books.findIndex(
            (book) => book.id === action.payload
        )
        state.author.books.splice(index,1)
        return{
            ...state
        }      
        

        default: return state
    }
}
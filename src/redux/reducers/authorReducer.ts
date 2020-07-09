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

type Audio = {
    readonly id: string,
    readonly audioUrl: string,
    readonly downloadUrl: string,
    readonly authorId: string
    name: string,
    singer: string
}

type Movie = {
    readonly id: string,
    readonly movieId: string,
    readonly authorId: string
    name: string,
    createdAt: string
}

type Illustration = {
    readonly id: string,
    readonly authorId: string
    illustrationUrl: string,
    name: string
}

type Test = {
    readonly id: string,
    readonly authorId: string

}

type Book = {
    readonly id: string,
    readonly authorId: string
    readonly bookUrl: string,
    readonly downloadUrl: string,
    name: string
}

type Author = {
    readonly id: string,
    firstName: string,
    lastName: string,
    midName: string,
    portretUrl: string,
    yearOfLife: string,
    bio: string,
    audio: Audio[],
    movies: Movie[],
    illustrations: Illustration[],
    tests: Test[],
    books: Book[]
}

export type AuthorDescription = {
    firstName: string,
    lastName: string,
    midName: string,
    readonly authorId: string,
    createdAt: string,
    yearOfLife: string,
    bio: string,
    portretUrl: string
}

export type AuthorState = {
    authors: AuthorDescription[],
    author: Author,
}

const initialState: AuthorState = {
    authors: [] as AuthorDescription[],
    author: {} as Author,
}

export type Action = {
    type: string
    authors: AuthorDescription[]
    author: Author
    payload: any
    bio: string
}

export default function (state = initialState, action: Action): AuthorState {
    let index;
    switch (action.type) {
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
        case SET_AUTHOR_BIO: return {
            ...state,
            ...state.author = {...state.author, bio: action.bio}
        }
        case DEL_AUDIO:
            index = state.author.audio.findIndex(
                (audio) => audio.id === action.payload
            )
            state.author.audio.splice(index, 1)
            return {
                ...state
            }
        case DEL_MOVIE:
            index = state.author.movies.findIndex(
                (movies) => movies.id === action.payload
            )
            state.author.movies.splice(index, 1)
            return {
                ...state
            }
        case DEL_ILLUSTRATION:
            index = state.author.illustrations.findIndex(
                (illustrations) => illustrations.id === action.payload
            )
            state.author.illustrations.splice(index, 1)
            return {
                ...state
            }
        case DEL_TEST:
            index = state.author.tests.findIndex(
                (tests) => tests.id === action.payload
            )
            state.author.tests.splice(index, 1)
            return {
                ...state
            }
        case DEL_BOOK:
            index = state.author.books.findIndex(
                (book) => book.id === action.payload
            )
            state.author.books.splice(index, 1)
            return {
                ...state
            }

        default: return state
    }
}
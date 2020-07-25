import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducers
import userReducer, { UserState } from './reducers/userReducer'
import uiReducer, { UIState } from './reducers/uiReducer'
import authorReducer, { AuthorState } from './reducers/authorReducer'
import testReducer, { TestState } from './reducers/testReducer'


export type StateApp = {
    UI: UIState,
    test: TestState,
    author: AuthorState,
    user: UserState
}

const initialState = {} as StateApp

const reducers = combineReducers({
    user: userReducer,
    UI: uiReducer,
    author: authorReducer,
    test: testReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;
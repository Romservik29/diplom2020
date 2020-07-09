import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducers
import userReducer from './reducers/userReducer'
import dataReducer, { DataState } from './reducers/dataReducer'
import uiReducer, { UIState } from './reducers/uiReducer'
import authorReducer, { AuthorState } from './reducers/authorReducer'
import testReducer, { TestState } from './reducers/testReducer'


export type StateApp = {
    data: DataState,
    UI: UIState,
    test: TestState,
    author: AuthorState
}

const initialState = {} as StateApp

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer,
    author: authorReducer,
    test: testReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;
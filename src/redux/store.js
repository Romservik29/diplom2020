import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//Reducers
import userReducer from './reducers/userReducer'
import dataReducer from './reducers/dataReducer'
import uiReducer from './reducers/uiReducer'
import authorReducer from './reducers/authorReducer'
import testReducer from './reducers/testReducer'


const initialState = {}

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer,
    author: authorReducer,
    test: testReducer
})

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store;
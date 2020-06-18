import {
    SET_UNAUTHENTICATED,
    SET_USER,
    SET_AUTHENTICATED,
    //LOADING_USER,
    //MARK_NOTIFICATION,
    LOADING_UI,
    CLEAR_ERRORS,
    SET_ERRORS
} from '../types'

import axios from 'axios'

export const loginUser = (userData,history)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/login', userData)
    .then(res=>{
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData())
        dispatch({type: SET_AUTHENTICATED})
        dispatch({
            type: CLEAR_ERRORS
        })
        history.push('/authors')
    })
    .catch(err=>{
        console.log(err)
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  console.log('logout')
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData =()=>(dispatch)=>{
    axios
    .get('/user')
    .then(res=>{
            dispatch({
                type: SET_USER,
                payload: res.data
            })
    })
    .catch(err=>{
        console.log(err);
    })
}

const setAuthorizationHeader = (token) => {
    
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};
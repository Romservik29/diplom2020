import {
    SET_UNAUTHENTICATED,
    SET_USER,
    SET_AUTHENTICATED,
    LOADING_UI,
    CLEAR_ERRORS,
    SET_ERRORS,
    SET_ALERT,
    CLOSE_ALERT
} from '../types'

import axios from 'axios'

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/login', userData)
        .then(res => {
            setAuthorizationHeader(res.data.token);
            dispatch(getUserData())
            dispatch({ type: SET_AUTHENTICATED })
            dispatch({
                type: CLEAR_ERRORS
            })
            history.push('/authors')
            dispatch({type: SET_ALERT, title:'Вы успешно вошли!', message:'', severity:'success'})   
            dispatch({type:SET_ERRORS})
            setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const logoutUser = (history) => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => (dispatch) => {
    axios
        .get('/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const signup = (newUserData,history) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/signup', newUserData)
        .then(res => {
            setAuthorizationHeader(res.data.token);
            dispatch({ type: SET_AUTHENTICATED })
            dispatch({
                type: CLEAR_ERRORS
            })
            history.push('/')
            dispatch({type: SET_ALERT, title:'Успешная регистрация!', message:'Ура! Теперь вы с нами!', severity:'success'})   
            setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)            
            dispatch(getUserData());
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export const changeProfileImage = (formData)=>(dispatch)=>{
    
    dispatch({type: LOADING_UI})
    axios
    .post(`/user/image`,formData)
    .then(res=>{
        dispatch(getUserData())
	    dispatch({type:CLEAR_ERRORS})
    })
    .catch(err=>{
    dispatch({type: SET_ALERT, title:'Ошибка', message:'К сожелению не удалось обновить фотографию!', severity:'error'})   
    dispatch({type:SET_ERRORS})
    setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)
})
}

export const changeProfileData = (userData)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`/user/details`,userData)
    .then(res=>{
        dispatch(getUserData())
	    dispatch({type:CLEAR_ERRORS})
    })
    .catch(err=>{
    dispatch({type: SET_ALERT, title:'Ошибка', message:'К сожелению не удалось обновить фаши данные!', severity:'error'})   
    dispatch({type:SET_ERRORS})
    setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)
})
}
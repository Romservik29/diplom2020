import {
    STOP_LOADING_UI,
    SET_AUTHORS,
    LOADING_UI,
    SET_ERRORS,
    SET_AUTHOR,
    DEL_AUDIO,
    DEL_BOOK,
    DEL_MOVIE,
    DEL_ILLUSTRATION,
    DEL_TEST,
    SET_ALERT,
    CLOSE_ALERT
} from '../types'

import axios from 'axios'

export const getAuthors = (page=1,limit=6)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios.get(`/authors?page=${page}&limit=${limit}`)
    .then(res=>{
        dispatch({type: SET_AUTHORS, authors: res.data.authors})
        dispatch({type: STOP_LOADING_UI})
    })
}
export const getAuthor = (id) =>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .get(`/author/${id}`)
    .then(res=>{
        dispatch({type: SET_AUTHOR, payload: res.data})
        dispatch({type: STOP_LOADING_UI})
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        })
    })
}
export const addAuthor = (newAuthor)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/author',newAuthor)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        window.location.href =`/authors/${res.data.id}`
        dispatch({type: SET_ALERT, title: 'Успех', message: 'Писатель успешно добавлен!', severity: 'success'})
            setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        })
    }) 
}

export const uploadPortret = (formData,authorId)=>(dispatch)=>{
    debugger
    dispatch({type: LOADING_UI})
    axios
    .post(`/author/portret`,formData)
    .then(res=>{
        dispatch(getAuthor(authorId))
    })
}

export const changeBio = (bio,id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`/author/${id}/bio`,{bio})
    .then(res=> {
        dispatch(getAuthor(id))
        dispatch({type: SET_ALERT, title:'Успех!', message:'Биография успешно изменена!', severity:'success'})  
            setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)

    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        })
    }) 
}

export const addAudio = (formData,id) => (dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`/audio`,formData)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(id))
        dispatch({type: SET_ALERT, title:'Успех!', message:'Аудиозапись успешно добавлена!', severity:'success'})   
            setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)


    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const delAudio = (id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .delete(`/audio/${id}`)
    .then(res=>{
        dispatch({type:DEL_AUDIO, payload: id})
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: SET_ALERT, title:'Успех!', message:'Аудиозапись успешно удалена!', severity:'success'})   
        setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)


    })
}
export const addMovie = (movie)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`/movie`,movie)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(movie.authorId))
        dispatch({type: SET_ALERT, title:'Успех!', message:'Фильм успешно добавлен!', severity:'success'})   
        setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)


    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const delMovie = (id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .delete(`/movie/${id}`)
    .then(res=>{
        dispatch({type:DEL_MOVIE, payload: id})
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: SET_ALERT, title:'Успех!', message:'Фильм успешно удалён!', severity:'success'})   
        setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)


    })
}

export const addTest = (test,id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post(`/author/${id}`,test)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(id))

    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const delTest = (id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .delete(`/test/${id}`)
    .then(res=>{
        dispatch({type:DEL_TEST, payload: id})
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: SET_ALERT, title:'Успех!', message:'Тест успешно удалён!', severity:'success'})   
        setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)


    })
}
export const addIllustration = (formData,id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/illustration',formData)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(id))
        dispatch({type: SET_ALERT, title:'Успех!', message:'Иллюстрация успешно добавлена!', severity:'success'})   
        setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)

    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const delIllustration = (id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .delete(`/illustration/${id}`)
    .then(res=>{
        dispatch({type:DEL_ILLUSTRATION, payload: id})
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: SET_ALERT, title:'Успех!', message:'Иллюстрация успешно удалена!', severity:'success'})   
        setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)
    })
}
export const addBook = (formData,id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .post('/book',formData)
    .then(res=> {
        dispatch({type: STOP_LOADING_UI})
        dispatch(getAuthor(id))
        dispatch({type: SET_ALERT, title:'Успех!', message:'Книга успешно добавлена!', severity:'success'})   
        setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)

    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }) 
}
export const delBook = (id)=>(dispatch)=>{
    dispatch({type: LOADING_UI})
    axios
    .delete(`/book/${id}`)
    .then(res=>{
        dispatch({type:DEL_BOOK, payload: id})
        dispatch({type: STOP_LOADING_UI})
        dispatch({type: SET_ALERT, title:'Успех!', message:'Книга успешно удалена!', severity:'success'})   
        setTimeout(()=>dispatch({type: CLOSE_ALERT}),3500)

    })
}

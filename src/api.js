import axios from 'axios'
//
const instance = axios.create({
    baseURL: 'https://us-central1-diplomsgk2020-ff454.cloudfunctions.net/api',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const loginAPI = {
    login(userData){
        return instance.post('/login',userData)
        .then(res =>{
           instance.defaults.headers.common['Authorization'] = ; 
        })
        
    },
    signup(userData){
        return instance.post('signup',userData)
    }
}

export const authorAPI = {
    getAuthors(page=1,limit=10){
        return instance.get(`/authors?page=${page}&limit=${limit}`)
        .then(res=>{
            return res.data
        })
    }
}
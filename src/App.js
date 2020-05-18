import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import {MuiThemeProvider} from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Navbar from './components/Navbar'
import themeObject from './util/theme';
import { LinearProgress } from '@material-ui/core/LinearProgress';
import jwtDecode from 'jwt-decode'
import axios from 'axios';
import { SET_AUTHENTICATED } from './redux/types';
import {ThemeProvider} from 'styled-components'
//Pages 
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import authors from './pages/authors'
import audios from './pages/audios'
import movies from './pages/movies'
import books from './pages/books'

//
import AuthRoute from './util/AuthRoute'
import { Provider } from 'react-redux';
import store from './redux/store'  
import {logoutUser} from './redux/actions/userActions';
import author from './pages/author';
import Illustrations from './pages/Illustrations';



const MuiTheme =createMuiTheme(themeObject)

const theme ={
  main: '#651fff',
  background: '#174578'
}

const token = localStorage.FBIdToken
if(token){
  const decodedToken = jwtDecode(token)
  console.log(token);
  console.log(decodedToken)
  if(decodedToken.exp * 1000<Date.now()){
    store.dispatch(logoutUser())
    window.location.href = '/login'
  }else{
    store.dispatch({type: SET_AUTHENTICATED})
    axios.defaults.headers.common['Authorization'] = token
  }
}

function App() {

  return (
    <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={MuiTheme}>
    <Provider store={store}>
      <Router>
      <Navbar/>
      {false?<LinearProgress/>:null}
      <div className="container">  
        <Switch>

          <Route exact path="/" component={home} />
          <AuthRoute exact path="/login" component={login} />
          <AuthRoute exact path="/signup" component={signup} />
          <Route exact path="/authors" component={authors} />
          <Route exact path="/audios" component={audios} />
          <Route exact path="/illustrations" component={Illustrations} />
          <Route exact path="/movies" component={movies} />
          <Route exact path="/texts" component={books} />
          <Route exact path="/authors/:authorId" component={author} />

        </Switch>
      </div>   
      </Router>
    </Provider>
    </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;

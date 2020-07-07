import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeObject from './util/theme';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';

//Pages 
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import authors from './pages/authors';
import audios from './pages/audios';
import movies from './pages/movies';
import CompareAuthor from './pages/CompareAuthor';
import user from './pages/user';
import author from './pages/author';
import Illustrations from './pages/Illustrations';
import Test from './pages/test'
//components
import Navbar from './components/Navbar'
import AuthRoute from './util/AuthRoute'
import ProtectRoute from './util/ProtectRoute'
import ProgressBar from './components/ProgressBar';
//redux
import { Provider } from 'react-redux';
import store from './redux/store'
import { logoutUser, getUserData } from './redux/actions/userActions';
import { SET_AUTHENTICATED } from './redux/types';
import MyAlert from './util/MyAlert';

axios.defaults.baseURL =
  'https://us-central1-diplomsgk2020-ff454.cloudfunctions.net/api';
//theme
const MuiTheme = createMuiTheme(themeObject)

const theme = {
  main: '#651fff',
  background: '#174578'
}
//authorized user
const token = localStorage.FBIdToken
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp + 3600 < Date.now()) {
    store.dispatch(logoutUser())
    window.location.href = '/login'
  } else {
    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common['Authorization'] = token 
    store.dispatch(getUserData())
  }
}




const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={MuiTheme}>
        <Provider store={store}>
          <Router>
            <ProgressBar style={{ position: 'fixed', top: '0px', left: '0px' }} />
            <Navbar />
            <MyAlert/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={home}/>
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup}/>
                <Route exact path="/authors" component={authors} />
                <Route exact path="/audios" component={audios} />
                <Route exact path="/illustrations" component={Illustrations} />
                <Route exact path="/movies" component={movies} />
                <Route exact path="/game" component={CompareAuthor} />
                <Route exact path="/authors/:authorId" component={author} />
                <Route exact path="/test/:testId" component={Test} />
                <ProtectRoute exact path="/user" component={user} />
                <Route exact path="*" component={home}/>
              </Switch>
            </div>
            <audio id="player" preload="metadata"></audio>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;

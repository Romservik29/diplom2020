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
import books from './pages/books';
import user from './pages/user';
import author from './pages/author';
import Illustrations from './pages/Illustrations';
//components
import Navbar from './components/Navbar'
import AuthRoute from './util/AuthRoute'
import ProtectRoute from './util/ProtectRoute'
import ProgressBar from './components/ProgressBar';
//redux
import { Provider } from 'react-redux';
import store from './redux/store'
import { logoutUser } from './redux/actions/userActions';
import { SET_AUTHENTICATED } from './redux/types';

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
  console.log(token);
  console.log(decodedToken);
  if (decodedToken.exp * 10000 < Date.now()) {
    store.dispatch(logoutUser())
    window.location.href = '/login'
  } else {
    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common['Authorization'] = token
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
                <ProtectRoute exact path="/user" component={user} />
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

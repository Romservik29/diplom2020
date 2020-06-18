import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';
import MyButton from '../util/MyButton';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: 'auto',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  pages: {
    position: 'absolute',
    left: '35%',
    [theme.breakpoints.down('md')]: {
      left:'40%',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    color: 'black',
  },
  button:{
    '&:hover':{
      backgroundColor: 'rgba(0, 0, 0, 0.30)',
    },
  },
}));

const PrimarySearchAppBar = (props) => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const logout = () => {
    props.logoutUser();
    handleMenuClose()
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link className={classes.link} to="/user">Профиль</Link></MenuItem>
      <MenuItem onClick={logout}><Link className={classes.link} to="/login">Выйти</Link></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {props.authenticated === true
         ?<MenuItem >
          <Link onClick={handleMobileMenuClose} className={classes.link} to="/user">Профиль</Link>
        </MenuItem>
        :<MenuItem onClick={handleMobileMenuClose}>
        <Link className={classes.link} to="/login">Войти</Link>
      </MenuItem>}
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className={classes.link} to="/authors">Писатели</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className={classes.link} to="/audio">Аудиозаписи</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className={classes.link} to="/tests">Тесты</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className={classes.link} to="/illustrations">Иллюстрации</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className={classes.link} to="/movies">Фильмы</Link>
      </MenuItem>
      {props.authenticated===true
            &&<MenuItem onClick={logout}>
        <Link className={classes.link} to="/login">Выход</Link>
      </MenuItem>}
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <MyButton
            tip="БелЛiт"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <SwapHorizIcon color="secondary" />
          </MyButton>
          <Typography className={classes.title} variant="h6" noWrap>
            РусЛит
          </Typography>

          <Box component='div' className={classes.pages}>
            <Button className={classes.button} color="inherit" component={Link} to="/authors">Писатели</Button>
            <Button className={classes.button} color="inherit" component={Link} to="/movies">Фильмы</Button>
            <Button className={classes.button} color="inherit" component={Link} to="/audios">Аудиозаписи</Button>
            <Button className={classes.button} color="inherit" component={Link} to="/tests">Тесты</Button>
            <Button className={classes.button} color="inherit" component={Link} to="/illustrations">Иллюстрации</Button>
          </Box>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {(props.authenticated === false)
              ? <Button color="secondary" component={Link} to="/login">Войти</Button>
              : <>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle color="secondary" />
                </IconButton>
              </>
            }
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon color="secondary" />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

let mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
})
export default connect(mapStateToProps, { logoutUser })(PrimarySearchAppBar)
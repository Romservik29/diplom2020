import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
//import PropTypes from 'prop-types'
import AppIcon from '../images/book2.png'
import axios from 'axios'
import PropTypes from 'prop-types'
//MUI Stuff
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Paper } from '@material-ui/core'

const styles = (theme) => ({
    typography: {
        useNextVariants: true
    },
    form: {
        textAlign: 'center',
    },
    image: {
        margin: '20px auto 20px auto'
    },
    pageTitle: {
        margin: '10px auto 10px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        position: 'relative'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    progress: {
        position: 'absolute'
    }
});

class signup extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            handle: '',
            loading: false,
            errors: {}
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        const newUserData = {
            email: this.state.email.trim(),
            password: this.state.password.trim(),
            confirmPassword: this.state.confirmPassword.trim(),
            handle: this.state.handle.trim()
        }
        axios
            .post('/signup', newUserData)
            .then(res => {
                localStorage.setItem('FBIdToken', ` ${res.data.token}`)
                this.setState({
                    loading: false
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err.response.data)
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }
    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item xs={12} sm={7}>
                    <Paper style={{ padding: '20px' }} >
                        <img width="200px" src={AppIcon} alt="Book" />
                        <Typography variant="h2" className={classes.pageTitle}>
                            Вход
                        </Typography>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                className={classes.textField}
                                helperText={errors.email}
                                error={errors.email ? true : false}
                                value={this.state.email}
                                onChange={this.handleChange}
                                fullWidth />
                            <TextField
                                id="handle"
                                name="handle"
                                type="text"
                                label="Номер зачетки"
                                helperText={errors.handle}
                                error={errors.handle ? true : false}
                                className={classes.textField}
                                value={this.state.handle}
                                onChange={this.handleChange}
                                fullWidth />
                            <TextField
                                id="password"
                                name="password"
                                type="password"
                                label="Придумайте пароль"
                                helperText={errors.password}
                                error={errors.password ? true : false}
                                className={classes.textField}
                                value={this.state.password}
                                onChange={this.handleChange}
                                fullWidth />
                            <TextField
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                label="Повторите пароль"
                                helperText={errors.confirmPassword}
                                error={errors.confirmPassword ? true : false}
                                className={classes.textField}
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                fullWidth />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                disabled={loading}>
                                Войти
                        </Button><br />
                            <small>
                                Уже есть аккаунт? войти <Link to="login">здесь</Link>
                            </small>
                        </form>
                    </Paper>
                </Grid>
                <Grid item sm />
            </Grid>
        )
    }
}
signup.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(signup)

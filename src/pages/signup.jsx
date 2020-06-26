import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
//import PropTypes from 'prop-types'
import AppIcon from '../images/book2.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../redux/actions/userActions';
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

class Signup extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }
    constructor() {
        super();
        this.state = {
            name: '',
            lastName: '',
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
        const newUserData = {
            name: this.state.name,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }
        this.props.signup(newUserData, this.props.history)
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
                            Регистрация
                        </Typography>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                id="name"
                                name="name"
                                type="text"
                                label="Введите имя"
                                className={classes.textField}
                                helperText={errors.name}
                                error={errors.name ? true : false}
                                value={this.state.name}
                                onChange={this.handleChange}
                                fullWidth />
                            <TextField
                                id="lastName"
                                name="lastName"
                                type="text"
                                label="Введите фамилию"
                                className={classes.textField}
                                helperText={errors.lastName}
                                error={errors.lastName ? true : false}
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                fullWidth />

                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                label="Введите email"
                                className={classes.textField}
                                helperText={errors.email}
                                error={errors.email ? true : false}
                                value={this.state.email}
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
const mapStateToProps = (state) => ({
    UI: state.UI
})
export default connect(mapStateToProps, { signup })(withStyles(styles)(Signup))

import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types'
import AppIcon from '../images/book2.png'
//MUI Stuff
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core';

//Redux 
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/userActions'

const styles =(theme)=>({
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
})

class login extends Component {
    constructor(){
        super();
         this.state ={
             email: '',
             password:'',
             errors: {}
         }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
          this.setState({ errors: nextProps.UI.errors });
        }
      }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const userData={
            email: this.state.email.trim(),
            password: this.state.password.trim()
        }
        this.props.loginUser(userData, this.props.history);
    }
    render() {
        const {classes,UI:{loading}} = this.props;
        const {errors} = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Paper style={{padding: '20px'}}>
                    <img width="200px" src={AppIcon} alt="Book"/>
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
                         fullWidth/>
                        <TextField
                         id="password"
                         name="password"
                         type="password" 
                         label="Password" 
                         helperText={errors.password}
                         error={errors.password ? true : false}
                         className={classes.textField}
                         value={this.state.password} 
                         onChange={this.handleChange} 
                         fullWidth/>
            		{errors.general && (
              			<Typography variant="body2" className={classes.customError}>
                		{errors.general}
             		 </Typography>
            		)}
                        <Button 
                         type="submit" 
                         variant="contained" 
                         color="primary" 
                         className={classes.button}   
                         disabled={loading}>
                         Войти
                        </Button><br/>
                        <small>Ещё нет аккаунта?</small> <br/>
                        <small>Зарегистрировать аккаунт <Link to="/signup">здесь</Link></small>
                    </form>
                    </Paper>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}
/*
login.propType={
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}
*/
const mapStateToProps=(state)=>({
    user: state.user,
    UI: state.UI
})
export default connect(mapStateToProps,{loginUser})(withStyles(styles)(login))

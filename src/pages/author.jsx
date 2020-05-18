import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Bio from '../components/author/Bio'
import Illustration from '../components/author/Illustration'
import Audio from '../components/author/Audio'
import Test from '../components/author/Test'
import Movie from '../components/author/Movie'
import withStyles from '@material-ui/core/styles/withStyles'
import Books from '../components/author/Books'

const styles = {
    root:{
        padding:10,
        border:'3px outset #174578',
        background: 'white',
    }
}

    

class author extends Component {
    render() {
        const {classes} = this.props;
        return (
                <Grid   className={classes.root}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Grid container component={Bio}/>
                    <Grid container component={Books}/>
                    <Grid container component={Audio}/>
                    <Grid container component={Illustration}/>
                    <Grid container component={Movie}/>
                    <Grid container component={Test}/>  
                </Grid>
        )
    }
}

export default withStyles(styles)(author)
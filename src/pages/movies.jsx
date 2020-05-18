import React, { Component } from 'react'
import  Grid from '@material-ui/core/Grid'
import MovieInfo from '../components/MovieInfo'

export default class authors extends Component {
    state = {
        audios: []
    }

    componentDidMount() {

    }
    render() {
        return (

            <Grid container justify='space-around' spacing={9}>{console.log('render MOVIES')}
                    <Grid item sm={4}>
                        <MovieInfo />
                    </Grid>
                    <Grid item sm={4}>
                        <MovieInfo />
                    </Grid>
                    <Grid item sm={4}>
                        <MovieInfo />
                    </Grid>
                    <Grid item sm={4}>
                        <MovieInfo />
                    </Grid>
                    <Grid item sm={4}>
                        <MovieInfo />
                    </Grid>
                    <Grid item sm={4}>
                        <MovieInfo />
                    </Grid>
                    <Grid item sm={4}>
                        <MovieInfo />
                    </Grid> 
                    <Grid item sm={4}>
                        <MovieInfo />
                    </Grid>
                </Grid>

        )
    }
}

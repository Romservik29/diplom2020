import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

export default class user extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Paper className="container">
                <Grid container xs={12}>
                    <Grid item xs={4}>
                        image
                    </Grid>
                    <Grid item xs={8}>
                        user data
                        </Grid>
                    <Grid item sx={12}>
                        user stats
                        </Grid>
                </Grid>
            </Paper>
        )
    }
}

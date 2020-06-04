import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import ProfileImage from '../components/profile/ProfileImage'
import ProfileDetails from '../components/profile/ProfileDetails'
import ProfileStats from '../components/profile/ProfileStats'

export default class user extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <Paper>
            <Grid container xs={12}>
                <Grid container spacing={4} xs={12}>
                    <Grid item xs={3}><ProfileImage /></Grid>
                    <Grid item xs={9}><ProfileDetails /></Grid>
                </Grid>
                <Grid container sx={12}>
                    <ProfileStats />
                </Grid>
            </Grid>
            </Paper>
        )
    }
}

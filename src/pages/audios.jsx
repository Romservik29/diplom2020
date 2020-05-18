import React, { Component } from 'react'
import  Grid  from '@material-ui/core/Grid'
import AudioInfo from '../components/AudioInfo';
import Player from '../components/Player'

export default class audios extends Component {
    state = {
        audios: []
    }

    componentDidMount() {

    }

    render() {
        return (<>
            <Grid>
                <Grid item sm={8} sx={12}component={AudioInfo}/>
                <Grid item sm={8} sx={12}component={AudioInfo}/>
                <Grid item sm={8} sx={12}component={AudioInfo}/>
                <Grid item sm={8} sx={12}component={AudioInfo}/>
                <Grid item sm={8} sx={12}component={AudioInfo}/>
                <Player/>
            </Grid>                   


        </>
        )
    }
}

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import AudioInfo from '../components/AudioInfo';
import Player from '../components/Player'
import { connect } from 'react-redux'
import { getAudio } from '../redux/actions/dataActions'
import {delAudio} from '../redux/actions/authorActions'
import { Paper } from '@material-ui/core';
class audios extends Component {
    state = {
        Src: '',
    }
    componentDidMount() {
        this.props.getAudio();
    }

    setSrc = (src) => {
        this.setState({
            Src: src
        })
    }
    render() {
        return (<>
            <Grid>
                <Paper>
                {this.props.audio.map((audio) => <Grid>
                    <AudioInfo 
                    setSrc={this.setSrc}
                    delAudio={this.props.delAudio}
                    authenticated={this.props.authenticated}
                    id={audio.id} name={audio.name}
                    playerSrc={this.state.Src}
                    audioUrl={audio.audioUrl} item sm={8} sx={12}/>
                    </Grid>)}
                <Player />
                </Paper>
            </Grid>


        </>
        )
    }
}
const mapStateToProps = (state) => ({
    audio: state.data.audio,
    authenticated: state.user.authenticated
})
export default connect(mapStateToProps, { getAudio ,delAudio})(audios)
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import AudioInfo from '../components/AudioInfo';
import Player from '../components/Player'
import { connect } from 'react-redux'
import { getAudio } from '../redux/actions/catalogActions'
import { delAudio } from '../redux/actions/authorActions'
import { Paper } from '@material-ui/core';
class audios extends Component {
    state = {
        src: '',
    }
    componentDidMount() {
        this.props.getAudio();
    }

    setSrc = (src) => {
        this.setState({
            src: src
        })
    }
    render() {
        return (<>
            <Grid>
                <Paper>
                    {this.props.audio.map((audio) =>
                        <Grid>
                            <AudioInfo
                                name={audio.name}
                                singer={audio.singer}
                                setSrc={this.setSrc}
                                delAudio={this.props.delAudio}
                                authenticated={this.props.authenticated}
                                id={audio.id}
                                playerSrc={this.state.src}
                                audioUrl={audio.audioUrl} item sm={8} sx={12}
                            />
                        </Grid>)}
                    <Player src={this.state.src} />
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
export default connect(mapStateToProps, { getAudio, delAudio })(audios)
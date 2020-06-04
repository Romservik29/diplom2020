import React from 'react'
import AudioPlayer from 'material-ui-audio-player'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        padding: 0,
        maxWidth: 1000,
        margin: 0,
        position:'fixed',
        bottom:0,
    },
});

export default function AudioInfo(props) {
    return (
        <div >
            <AudioPlayer src={props.src} useStyles={useStyles} download={true} variation="primary"/>
        </div>
    )
}

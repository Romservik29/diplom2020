import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import PauseIcon from '@material-ui/icons/Pause';
import { CardActionArea } from '@material-ui/core';
import styled from 'styled-components'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteButton from './adminButtons/DeleteButton';
import PropTypes from 'prop-types'
import AudioProgress from './AudioProgress';

const Root = styled(CardActionArea)`
display: flex;
align-items: center;
border-bottom: 1px dotted grey;
max-width: 1000;
`;

const Content = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
z-index:20;
`;

const AudioInfo = (props) => {

    const player = document.getElementById('player')
    const [play, setPlay] = useState(false);
    const title = "вы действительно хотите удалить эту аудиозапись?";
    const handleDelete = (id) => {
        props.delAudio(id);
    }
    const adminButtons = props.authenticated
        ? <div>
            <DeleteButton title={title} deleteId={props.id} deleteFunc={handleDelete} />
            <IconButton>
                <CloudDownloadIcon color='primary' />
            </IconButton>
        </div>
        : <div>
            <IconButton>
                <CloudDownloadIcon color='primary' />
            </IconButton>
        </div>

    const handlePlayClick = () => {
        doPlay(props.audioUrl)
    }
        const doPlay = (src) => {
            
        if (player.src !== src) {
            console.log(player.paused+" Play")
            player.src = src;
            props.setSrc(src)
            player.play()
            setPlay(true)
        }
        else if (player.src === src && play === true && !player.paused) {
   
            player.pause();
            setPlay(false)
        }
        else if (play === false && player.paused){
            player.play()
            setPlay(true)
        }
    }


    return (
        <Root onClick={handlePlayClick}>
            <Content>
                <div style={{ display: 'flex'}}>
                    <div>
                        
                        {(play === true && props.audioUrl===props.playerSrc)
                            ? <IconButton aria-label="play/pause" onClick={handlePlayClick}>
                                <PauseIcon color="primary" />
                            </IconButton>
                            : <IconButton aria-label="play/pause" onClick={handlePlayClick}>
                                <PlayArrowIcon color="primary" />
                            </IconButton>
                        }
                    </div>
                    <div>
                        <Typography variant='body1'>
                            {props.name}
                        </Typography>
                        <Typography variant='body2'>
                            {props.name}
                        </Typography>
                    </div>
                </div>
                <div>
                    {adminButtons}
                </div>
                
            </Content>
            {(props.audioUrl===props.playerSrc)&&<AudioProgress />}
        </Root>

    )
}

AudioInfo.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    authenticated: PropTypes.bool.isRequired,
    delAudio: PropTypes.func.isRequired
}

export default AudioInfo;

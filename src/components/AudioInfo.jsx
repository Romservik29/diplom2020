import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import PauseIcon from '@material-ui/icons/Pause';
import styled from 'styled-components'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteButtonModal from './admin/DeleteButtonModal';
import PropTypes from 'prop-types'

const Root = styled.div`
display: flex;
align-items: center;
border-bottom: 3px dotted #48b9f0;
max-width: 1000;
position: relative;
transition: 0.5s;
&:hover{
    background-color: #ddeef6;
}
&:last-child{
    border-bottom: none;
}
`;

const Content = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
z-index:20;
`;

const PlyingBg = styled.div`
background-color: #00acff;
height: 100%;
position: absolute;
width: 100%;
`;

const AudioInfo = (props) => {

    const player = document.getElementById('player')
    const [play, setPlay] = useState(false);
    const title = "Вы действительно хотите удалить эту аудиозапись?";
    const handleDelete = (id) => {
        props.delAudio(id);
    }


    const handlePlayClick = () => {
        doPlay(props.audioUrl)
    }
    const doPlay = (src) => {

        if (player.src !== src) {
            player.src = src;
            props.setSrc(src)
            player.play()
            setPlay(true)
        }
        else if (player.src === src && play === true && !player.paused) {

            player.pause();
            setPlay(false)
        }
        else if (play === false && player.paused) {
            player.play()
            setPlay(true)
        }
    }


    return (
        <Root onClick={handlePlayClick}>
            <Content>
                <div style={{ display: 'flex' }}>
                    <div>

                        {(play === true && props.audioUrl === props.playerSrc)
                            ? <IconButton aria-label="play/pause" onClick={handlePlayClick}>
                                <PauseIcon color="primary" />
                            </IconButton>
                            : <IconButton aria-label="play/pause" onClick={handlePlayClick}>
                                <PlayArrowIcon color="primary" />
                            </IconButton>
                        }
                    </div>
                    <div>
                        <Typography style={{ fontFamily: 'Parisienne, cursive' }}>
                            {props.name}
                        </Typography>
                        <Typography variant='body2'>
                            {props.singer}
                        </Typography>
                    </div>
                </div>
                <div>
                    {props.role === 'admin'
                        && <DeleteButtonModal tip="удалить"
                            title={title}
                            deleteId={props.id}
                            deleteFunc={handleDelete} />
                    }


                    <a href={props.audioUrl}>
                        <IconButton>
                            <CloudDownloadIcon color='primary' />
                        </IconButton>
                        </a>    
                </div>                
            
            </Content>
                    {(props.audioUrl === props.playerSrc) && <PlyingBg />}
        </Root>
    )
}

AudioInfo.propTypes = {
                    name: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    delAudio: PropTypes.func.isRequired
}

export default AudioInfo;

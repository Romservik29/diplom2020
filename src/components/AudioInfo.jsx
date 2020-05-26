import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import PauseIcon from '@material-ui/icons/Pause';
import { CardActionArea } from '@material-ui/core';
import styled from 'styled-components'

const Root = styled(CardActionArea)`
display: flex;
align-items: center;
border-bottom: 1px dotted grey;
max-width: 1000;
`;

const Content = styled.div`
display: flex;
width: 100%;
`;

const AudioInfo = (props) => {
    const [play, setPlay] = useState(false);
    const handlePlayClick = () => {
        if (play === false) setPlay(true)
        else setPlay(false);
    }
let audio = new Audio();
audio.src = props.audioUrl;
const duration = audio.duration;
    return (
        <Root onClick={handlePlayClick}>
            <Content>
                {play === false
                    ?   <IconButton aria-label="play/pause" onClick={handlePlayClick}>

                            <PlayArrowIcon color="primary" />
                        </IconButton>

                    :   <IconButton aria-label="play/pause" onClick={handlePlayClick}>
                            <PauseIcon color="primary" />
                        </IconButton>
                }

                <div>
                    <Typography variant='body1'>
                        How are u, Russians Mans
                    </Typography>
                    <Typography variant='body2'>
                        How are u, Russians Mans
                    </Typography>
                </div>
            </Content>
            <div>
                <span>
                    {duration}
                </span>
            </div>
        </Root>

    )
}

export default AudioInfo;

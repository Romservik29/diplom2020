import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import PauseIcon from '@material-ui/icons/Pause';
import { CardActionArea } from '@material-ui/core';
import styled from 'styled-components'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import EditButton from './adminButtons/EditButton';
import DeleteButton from './adminButtons/DeleteButton';

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
`;
const AudioInfo = (props) => {
    const adminButtons = props.authenticated
        ? <div>
            <EditButton />
            <DeleteButton />
            <IconButton>
                <CloudDownloadIcon color='primary' />
            </IconButton>
        </div>
        : <div>
            <IconButton>
                <CloudDownloadIcon color='primary' />
            </IconButton>
        </div>
    const [play, setPlay] = useState(false);
    const handlePlayClick = () => {
        if (play === false) setPlay(true)
        else setPlay(false);
    }
    return (
        <Root onClick={handlePlayClick}>
            <Content>
                <div style={{display: 'flex'}}>
                    <div>
                    {play === false
                        ? <IconButton aria-label="play/pause" onClick={handlePlayClick}>

                            <PlayArrowIcon color="primary" />
                        </IconButton>

                        : <IconButton aria-label="play/pause" onClick={handlePlayClick}>
                            <PauseIcon color="primary" />
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
        </Root>

    )
}

export default AudioInfo;

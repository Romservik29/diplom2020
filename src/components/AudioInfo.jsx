import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PauseIcon from '@material-ui/icons/Pause';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px dotted grey',
        maxWidth: 1000,
    },
    content: {
        display: 'flex',
        width: '100%',
    },
    time: {
        textAlign: 'right',
    },
});

export default function AudioInfo() {
    const classes = useStyles();
    const [play, setPlay] = useState(false);
    return (
            <CardActionArea className={classes.root}>
            <div className={classes.content}>
                <IconButton aria-label="play/pause">
                    {play === false
                        ? <PlayArrowIcon color="primary" onClick={() => setPlay(true)} />
                        : <PauseIcon color="primary" onClick={() => setPlay(false)} />
                    }
                </IconButton>
                <div>
                    <Typography variant='body1'>
                        How are u, Russians Mans
                    </Typography>
                    <Typography variant='body2'>
                        How are u, Russians Mans
                    </Typography>
                </div>
            </div>
            <div>
                <span className={classes.time}>
                    3:12
                </span>
            </div>
            </CardActionArea>

    )
}

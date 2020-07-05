import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress style={{height: '10px'}} variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${props.currentQuest}/${props.questCount}`}</Typography>
            </Box>
        </Box>
    );
}

export default function TestProgress(props) {
    const normalize = value => (value - 0) * 100 / (props.questCount - 0);
    return (
        <div style={{padding:'10px'}}>
            <LinearProgressWithLabel value={normalize(props.currentQuest)} currentQuest={props.currentQuest} questCount={props.questCount}/>
        </div>
    )
}

TestProgress.propTypes={
    currentQuest: PropTypes.number.isRequired,
    questCount: PropTypes.number.isRequired
}
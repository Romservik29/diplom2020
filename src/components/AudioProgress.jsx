import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: '100%',
        borderRadius: 5,
        position: 'absolute',
        width: '100%',
        zIndex: 10,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'dark' ? 700 : 200],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff59',
    },
}))(LinearProgress);

//componentShouldUpdate()

class AudioProgress extends React.Component {


    
render(){

return (
    <>
        <BorderLinearProgress variant="determinate" value={100} />
    </>)}
}
export default AudioProgress;
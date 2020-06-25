import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog';

const Wrapper = styled.div`
padding: 8px;
width: 100%;
font-family: Parisienne,cursive,
-apple-system, BlinkMacSystemFont,
 'Segoe UI', 'Roboto', 'Oxygen',
 'Ubuntu', 'Cantarell', 'Fira Sans', 
 'Droid Sans', 'Helvetica Neue', sans-serif;
`;



export default function MovieInfo(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <Paper>
            <Wrapper>
                <div>
                    <iframe title="movie"width="285" height="200" src={`https://www.youtube.com/embed/${props.movieId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p style={{margin: '5px'}}>{props.movieName}</p>
                <Button onClick={handleClickOpen} variant="contained" color="primary">Просмотр в режиме кинотеатра</Button>
            </Wrapper>
            <Dialog
        open={open}
        keepMounted
        maxWidth='lg'
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <iframe title="movieTheater" width="850px" height="500px" src={`https://www.youtube.com/embed/${props.movieId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Dialog>
        </Paper>
    )
}


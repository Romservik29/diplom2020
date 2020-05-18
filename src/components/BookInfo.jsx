import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 340,
    },
    media: {  
        backgroundSize: 'contain',
        width: 300,
        height: 100,
    },
    btn: {
        margin: 'auto',
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://sun9-45.userapi.com/c853516/v853516170/1de870/3Q4Y0vx9DoA.jpg"
                    title="Book"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Три осла и два мушкетера
                    </Typography>
                    <Typography variant="body2" component="p">
                        Александр Пушкин, 2019
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" size="small" color="primary" className={classes.btn}>
                    Скачать
                </Button>
            </CardActions>
        </Card>
    );
}
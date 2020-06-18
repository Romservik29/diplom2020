import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import MovieInfo from '../components/MovieInfo'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export default class authors extends Component {
    state = {
        audios: [],
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <Grid style={{ marginTop: '20px' }} container justify='space-between' spacing={2}>
                    <Grid item>
                        <MovieInfo movieId="37JPBLlyT4c" movieName="Пушкин. Биография" open={this.handleOpen}/>
                    </Grid>
                    <Grid item>
                        <MovieInfo movieId="ysb2wqDZX78" movieName="Пушкин. Интересные факты"/>
                    </Grid>
                    <Grid item>
                        <MovieInfo movieId="6kgHI7Ph17o" movieName="Есенин. Краткая биография"/>
                    </Grid>
                    <Grid item>
                        <MovieInfo movieId="40QldsoSzA4" movieName="Толстой. Биография"/>
                    </Grid>
                    <Grid item>
                        <MovieInfo movieId="TFHEHDAVXjM" movieName="Толстой. Цитаты"/>
                    </Grid>
                    <Grid item>
                        <MovieInfo movieId="V9C0rxI2E7I" movieName="Толстой. Док. фильм"/>
                    </Grid>
                    <Grid item>
                        <MovieInfo movieId="Hgz_aLfmcZA" movieName="Гоголь. Краткая биография"/>
                    </Grid>
                    <Grid item>
                        <MovieInfo movieId="385ezj2KUc8" movieName="Гоголь. Мертвые души 1ч."/>
                    </Grid>
                    <Grid item>
                        <MovieInfo movieId="r0ZiEXe5IsE" movieName="Гоголь. Мертвые души 2ч."/>
                    </Grid>
                </Grid>
                <ArrowForwardIosIcon size="large" style={{color:'white',position:'absolute', fontSize: '3em', left: '78%', top: '50%'}}/>
            </div >
        )
    }
}

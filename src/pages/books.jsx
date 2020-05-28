import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import BookInfo from '../components/BookInfo';


export default class books extends Component {
    componentDidMount() {

    }
    render() {


        return (

            <Grid container justify='space-evenly' spacing={9}>{console.log('render BOOKS')}
                    <Grid item sm={4}>
                        <BookInfo />
                    </Grid>
                    <Grid item sm={4} >
                        <BookInfo />
                    </Grid>
                    <Grid item sm={4}>
                        <BookInfo />
                    </Grid>
            </Grid>

        )
    }
}

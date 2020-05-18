import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import BookInfo from '../components/BookInfo';


export default class authors extends Component {
    state = {
        authors: []
    }

    componentDidMount() {
        //authorAPI.getAuthors()
        axios.get('authors?page=1&limit=10')
            .then(res => {
                this.setState({
                    authors: res.data.authors
                })
            })
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

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import AuthorInfo from '../components/AuthorInfo';


export default class authors extends Component {
    state ={
        authors: []
    }
    
    componentDidMount(){
        //authorAPI.getAuthors()
        axios.get('authors?page=1&limit=6')
        .then(res=>{
            this.setState({
                authors: res.data.authors                
            })
        })
    }
    render() {


        return (
            <Grid style={{background: '#fff'}} container justify='space-evenly' spacing={9}>{console.log('render')}
                    {this.state.authors.map(author=>
                    <Grid item>
                        <AuthorInfo key={author.authorId} author ={author} sm={4} xs={4}/>
                    </Grid>)} 
            </Grid>

        )
    }
}

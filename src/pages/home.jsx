import React, { Component } from 'react'
//import {authorAPI} from '../api'
import axios from 'axios'
export class home extends Component {
    state ={
        authors: []
    }
    componentDidMount(){
        axios.get('authors?page=1&limit=3')
        .then(res=>{
            this.setState({
                authors: res.data.authors                
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.authors.map(author => <div>{author.name}</div>)}
            </div>
        )
    }
}

export default home

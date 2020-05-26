import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Bio from '../components/author/Bio'
import Illustration from '../components/author/Illustration'
import Audio from '../components/author/Audio'
import Test from '../components/author/Test'
import Movie from '../components/author/Movie'
import Books from '../components/author/Books'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
    getAuthor,
    addAudio,
    addMovie,
    addIllustration,
    addText
} from '../redux/actions/authorActions'

const Wrapper = styled(Grid)`
padding:10px;
border:3px outset #174578;
background: white;
`;

const GridWrapper = styled(Grid)`
    >div{
        width:100%;
    }
`;


class author extends Component {

    componentDidMount() {
        let authorId = this.props.match.params.authorId;
        this.props.getAuthor(authorId);
    }
    render() {
        const { author: {
            firstName,
            lastName,
            midName,
            portretUrl,
            yearOfLife,
            bio,
            audio,
            movies,
            illustrations,
            tests,
            books,
            authorId
        } } = this.props;

        return (
            <Wrapper
                container
                justify="center"
                alignItems="center"
            >
                <GridWrapper container>
                    <Bio
                        portretUrl={portretUrl}
                        firstName={firstName}
                        lastName={lastName}
                        midName={midName}
                        yearOfLife={yearOfLife}
                        bio={bio}
                        authenticated={this.props.authenticated}
                    />
                </GridWrapper>
                <GridWrapper container >
                    <Books books={books} authenticated={this.props.authenticated} />

                </GridWrapper>
                <GridWrapper container>
                    <Audio audio={audio} authorId={this.props.author.authorId} addAudio={this.props.addAudio} authenticated={this.props.authenticated} />
                    <button onClick={this.props.addAudio}>Click</button>
                </GridWrapper>
                <GridWrapper container>
                    <Illustration illustrations={illustrations} authenticated={this.props.authenticated} />
                </GridWrapper>
                <GridWrapper container>
                    <Movie movies={movies} authenticated={this.props.authenticated} />
                </GridWrapper>
                <GridWrapper container>
                    <Test tests={tests} authenticated={this.props.authenticated} />
                </GridWrapper>
            </Wrapper>
        )
    }

}

const mapStateToProps = (state) => ({
    author: state.author.author,
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, {getAuthor,
    addAudio,
    addMovie,
    addIllustration,
    addText})(author)
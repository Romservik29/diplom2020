import {
    getAuthor,
    uploadPortret,
    delAudio,
    delBook,
    delMovie,
    delIllustration,
} from '../redux/actions/authorActions';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Bio from '../components/author/Bio';
import Illustration from '../components/author/Illustration';
import Audio from '../components/author/Audio';
import Test from '../components/author/Test';
import Movie from '../components/author/Movie';
import Books from '../components/author/Books';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AddAuthorItemsMenu from '../components/author/AddAuthorItemsMenu';
import SubTitle from '../components/author/SubTitle'

const Wrapper = styled(Grid)`
padding:10px;
border:3px outset #174578;
background: white;
height:100%;
`;

const GridWrapper = styled(Grid)`
    >div{
        width:100%;
    }
`;

class Author extends Component {
    componentDidMount() {
        let authorId = this.props.match.params.authorId;
        this.props.getAuthor(authorId)
    }
    render() {
        const {
            authenticated,
            author: {
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
                id
            } } = this.props;

        return (<>
            {<Wrapper
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
                        authenticated={authenticated}
                        authorId={id}
                        uploadPortret={this.props.uploadPortret}
                    />
                </GridWrapper>
                <GridWrapper container >
                    <SubTitle name="Тексты" />
                    <Books books={books} delBook={this.props.delBook} addBook={this.props.addBook} authenticated={authenticated} authorId={id} />
                </GridWrapper>
                <GridWrapper container>
                    <Grid item >
                        <SubTitle name="Аудиозаписи" />
                    </Grid>
                    <Grid item>
                        <Audio audio={audio} delAudio={this.props.delAudio} addAudio={this.props.addAudio} authenticated={authenticated} authorId={id} />
                    </Grid>
                </GridWrapper>
                <GridWrapper container>
                    <Grid item >
                        <SubTitle name="Иллюстрации" delFunc={this.props.delIllustration} data={illustrations} add/>
                    </Grid>
                    <Illustration illustrations={illustrations} authenticated={authenticated} authorId={id} />
                </GridWrapper>
                <GridWrapper container>
                    <Grid item>
                        <SubTitle name="Фильмы" delFunc={this.props.delMovie} data={movies} add/>
                    </Grid>
                    <Grid item >
                        <Movie movies={movies} authenticated={authenticated} authorId={id} />
                    </Grid>
                </GridWrapper>
                <GridWrapper container>
                    <Grid item >
                        <SubTitle name="Тесты" />
                    </Grid>
                    <Grid item >
                        <Test tests={tests} authenticated={authenticated} authorId={id} />
                    </Grid>
                </GridWrapper>
                <AddAuthorItemsMenu authorId={id} authenticated={authenticated} />
            </Wrapper>}

        </>
        )
    }
}

const mapStateToProps = (state) => ({
    author: state.author.author,
    authenticated: state.user.authenticated,
    loading: state.UI.loading
})

export default connect(mapStateToProps, {
    getAuthor,
    delBook,
    uploadPortret,
    delAudio,
    delIllustration,
    delMovie
})(Author)
import {
    getAuthor,
    addAudio,
    addMovie,
    addIllustration,
    addBook,
    uploadPortret,
    delAudio,
    delBook,
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

import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

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

const AuthorAddItems = styled(IconButton)`
    position: fixed;
    top: 90%;
    right: 18%;
`;


class Author extends Component {
    state = {
        anchorEl: null
    }
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
        const handleClose = () => {
            this.setState({
                anchorEl: null
            })
        }
        const handleClick = (event) => {
            this.setState({
                anchorEl: event.currentTarget
            });
        };
        const renderAuthorAddItemsMenu = (
            authenticated === true
            && <>
                <AuthorAddItems onClick={handleClick}>
                    <AddCircleIcon style={{ fontSize: '3em', color: '#9bcffd' }} />
                </AuthorAddItems>
                <Menu
                    id="author-add-items-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Аудиозапись</MenuItem>
                    <MenuItem onClick={handleClose}>Текст</MenuItem>
                    <MenuItem onClick={handleClose}>Иллюстрацию</MenuItem>
                    <MenuItem onClick={handleClose}>Тест</MenuItem>
                </Menu>
            </>

        )
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
                    <Books books={books} delBook={this.props.delBook} addBook={this.props.addBook} authenticated={authenticated} authorId={id} />
                </GridWrapper>
                <GridWrapper container>
                    <Audio audio={audio} delAudio={this.props.delAudio} addAudio={this.props.addAudio} authenticated={authenticated} authorId={id} />
                </GridWrapper>
                <GridWrapper container>
                    <Illustration illustrations={illustrations} authenticated={authenticated} authorId={id} />
                </GridWrapper>
                <GridWrapper container>
                    <Movie movies={movies} authenticated={authenticated} authorId={id} />
                </GridWrapper>
                <GridWrapper container>
                    <Test tests={tests} authenticated={authenticated} authorId={id} />
                </GridWrapper>
            </Wrapper>}
            {renderAuthorAddItemsMenu}
        </>
        )
    }
}
/*const handleDelete =(file,name,second)=>{
    const formData = new FormData();
    formData.append('audio', file, file.name);
    formData.append('name', name);
    formData.append('singer', second)
    formData.append('authorId', props.authorId);
    props.delBook(formData);
}*/


const mapStateToProps = (state) => ({
    author: state.author.author,
    authenticated: state.user.authenticated,
    loading: state.UI.loading
})

export default connect(mapStateToProps, {
    getAuthor,
    addAudio,
    addMovie,
    addIllustration,
    addBook,
    delBook,
    uploadPortret,
    delAudio,
})(Author)
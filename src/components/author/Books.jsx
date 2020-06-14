import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteButtonModal from '../admin/DeleteButtonModal';
import PropTypes from 'prop-types'
import EmptyContainer from './EmptyContainer'

const Wrapper = styled.div`
width: 100%;
`;
const Name = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
`;



export default function Books(props) {

    const title = "Вы действительно хотите удалить эту книгу?";

    let i = 1;
    return (
        <Wrapper>
            {!props.books.length>0
                ? <EmptyContainer />
                : props.books.map(book => <Name>
                    <div>
                        <span>{i++}. </span>{book.name}
                    </div>

                    {props.authenticated === true
                        ? <div>
                            <DeleteButtonModal title={title} tip='удалить' deleteId={book.id} deleteFunc={props.delBook} />
                            <IconButton>
                                <CloudDownloadIcon color='primary' />
                            </IconButton>
                        </div>
                        : <div>
                            <IconButton>
                                <CloudDownloadIcon color='primary' />
                            </IconButton>
                    </div>}
                </Name>)}
        </Wrapper>
    )
}

Books.propTypes = {
    book: PropTypes.object.isRequired,
    delBook: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

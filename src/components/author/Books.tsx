import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteButtonModal from '../admin/DeleteButtonModal';
import EmptyContainer from './EmptyContainer'
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Wrapper = styled.div`
width: 100%;
border: 1px solid #00acff;
background-color: #ddeef6;
	border-top: 3px dotted #48b9f0;
	border-bottom: 3px dotted #48b9f0;
	box-shadow: inset 0 -1px 0 0 #48b9f0, inset 0 1px 0 0 #48b9f0, 0 1px 0 0 #48b9f0, 0 -1px 0 0 #48b9f0;
	margin-bottom: 5px;    

`;
const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 3px dotted #48b9f0;
font-family: 'Parisienne', cursive,
-apple-system, BlinkMacSystemFont,
 'Segoe UI', 'Roboto', 'Oxygen',
 'Ubuntu', 'Cantarell', 'Fira Sans', 
 'Droid Sans', 'Helvetica Neue', sans-serif;
&:last-child{
    border-bottom: none;
}
`;
const Name = styled.div`
display: flex;
align-items: center;
height: 2.28em;
`;

type BookProps = {
    name: string
    downloadUrl: string
    id: string
    role: string
    delBook: (id: string) => void
}

type BooksProps = {
    delBook: (id: string) => void
    books: {
        name: string
        downloadUrl: string
        id: string
    }[]
    role: string
    name: string
    id: string
}

const title = "Вы действительно хотите удалить эту книгу?";

const Book = (props: BookProps, { rest }: any) => {
    return <Container>
        <Name >
            <MenuBookIcon style={{ color: '#00acff', margin: '0px .5rem 0px .5rem' }} />
            <span>
                {props.name}
            </span>
        </Name>
        <div>
            {props.role === 'admin'
                && <DeleteButtonModal
                    title={title}
                    tip='удалить'
                    deleteId={props.id}
                    deleteFunc={props.delBook}
                />}
            <a {...rest} href={props.downloadUrl} download="book">
                <IconButton>
                    <CloudDownloadIcon color='primary' />
                </IconButton>
            </a>
        </div>
    </Container>
}
const Books = (props: BooksProps) => {
    return (
        <Wrapper>
            {props.books === undefined
                ? <EmptyContainer />
                : props.books.map(book => <Book role={props.role} name={book.name} downloadUrl={book.downloadUrl} delBook={props.delBook} id={book.id} />)}
        </Wrapper>
    )
}




export default Books
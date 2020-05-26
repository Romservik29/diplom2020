import React from 'react'
import SubTitle from './SubTitle'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

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
    let i =1;
    return (
        <Wrapper>
            <SubTitle name="Тексты" add tip="Добавить книгу"/>
            {props.books.map(book=> <Name>
                    <div>
                        <span>{i++}. </span>{book.name} | 16 вопросов
                    </div> 
                    <div>
                    <EditButton/> 
                    <DeleteButton/>
                    <IconButton>
                        <CloudDownloadIcon color='primary'/>
                    </IconButton>

                    </div>
                </Name> )} 
        </Wrapper>
    )
}

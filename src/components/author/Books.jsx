import React from 'react'
import SubTitle from './SubTitle'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Wrapper = styled.div`
width: 100%;
`;
const Name = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
`; 

export default function Books() {
    return (
        <Wrapper>
            <SubTitle name="Тексты" add/>
            <Name>
                    <div>
                        <span>1. </span>Приход номер 2 везельвула | 16 вопросов
                    </div> 
                    <div>
                    <IconButton>
                        <EditIcon color='primary'/>
                    </IconButton> 
                    <IconButton>
                        <DeleteForeverIcon color='primary'/>
                    </IconButton>
                    <IconButton>
                        <CloudDownloadIcon color='primary'/>
                    </IconButton>

                    </div>
                </Name>                <Name>
                    <div>
                        <span>1. </span>Приход номер 2 везельвула | 16 вопросов
                    </div> 
                    <IconButton>
                        <CloudDownloadIcon color='primary'/>
                    </IconButton>
                </Name>                <Name>
                    <div>
                        <span>1. </span>Приход номер 2 везельвула | 16 вопросов
                    </div> 
                    <IconButton>
                        <CloudDownloadIcon color='primary'/>
                    </IconButton>
                </Name>
        </Wrapper>
    )
}

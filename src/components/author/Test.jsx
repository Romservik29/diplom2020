import React from 'react'
import styled from 'styled-components'
import SubTitle from './SubTitle'
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const Wrapper = styled.div`
width: 100%;
`;
const Name = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
`; 

export default function Tests() {
    return (
        <Wrapper>
                <SubTitle name="Тесты" add/>
                <Name>
                    <div>
                        <span>1. </span>Приход номер 2 везельвула 16 вопросов
                    </div> 
                    <IconButton>
                        <CloudDownloadIcon color='primary'/>
                    </IconButton>
                </Name>
                <Name>
                    <div>
                        <span>2. </span>Приход номер 2 везельвула
                    </div> 
                    <IconButton>
                        <CloudDownloadIcon/>
                    </IconButton>
                </Name>                <Name>
                    <div>
                        <span>3. </span>Приход номер 2 везельвула
                    </div> 
                    <IconButton>
                        <CloudDownloadIcon/>
                    </IconButton>
                </Name>
        </Wrapper>
    )
}

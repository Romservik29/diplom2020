import React from 'react'
import styled from 'styled-components'
import SubTitle from './SubTitle'
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MyButton from '../../util/MyButton'
const Wrapper = styled.div`
width: 100%;
`;
const Name = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
`;

export default function Test(props) {
    const adminButtons = (props.authenticated === true)
        ? <>
            <DeleteButton />
            <EditButton />
        </>
        : null
    return (
        <Wrapper>
            <SubTitle name="Тесты" add tip="Добавить тест" />
            <Name>
                <div>
                    <span>1. </span>Приход номер 2 везельвула 16 вопросов
                    </div>
                <div>
                    <IconButton>
                        <PlayArrowIcon color='primary' />
                    </IconButton>
                    {adminButtons}
                    <MyButton>
                        <CloudDownloadIcon color='primary' />
                    </MyButton>
                </div>
            </Name>
            <Name>
                <div>
                    <span>2. </span>Приход номер 2 везельвула
                    </div>
                <IconButton>
                    <CloudDownloadIcon />
                </IconButton>
            </Name>                <Name>
                <div>
                    <span>3. </span>Приход номер 2 везельвула
                    </div>
                <IconButton>
                    <CloudDownloadIcon />
                </IconButton>
            </Name>
        </Wrapper>
    )
}

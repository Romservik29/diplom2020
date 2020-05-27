import React from 'react'
import styled from 'styled-components'
import SubTitle from './SubTitle'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteButton from '../adminButtons/DeleteButton';
import EditButton from '../adminButtons/EditButton';
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
    let i =1;
    const adminButtons = (props.authenticated === true)
        ? <div>
            <MyButton>
                <PlayArrowIcon color='primary' />
            </MyButton>
            <DeleteButton />
            <EditButton />
            <MyButton>
                <CloudDownloadIcon color='primary' />
            </MyButton>
        </div>
        : <div>
            <MyButton>
                <PlayArrowIcon color='primary' />
            </MyButton>
            <MyButton>
                <CloudDownloadIcon color='primary' />
            </MyButton>
        </div>
    return (
        <Wrapper>
            <SubTitle name="Тесты" add tip="Добавить тест" />
            {props.tests.map(test=><Name>
                <div>
                    <span>{i++}. </span> {test.name} | {test.questionsCount} вопросов
                </div>
                {adminButtons}
            </Name>)}
        </Wrapper>
    )
}

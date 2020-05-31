import React from 'react'
import styled from 'styled-components'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteButton from '../adminButtons/DeleteButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MyButton from '../../util/MyButton'
import EmptyContainer from './EmptyContainer';
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
    let i = 1;

    return (
        <Wrapper>
            
            {!props.tests.length > 0
                ? <EmptyContainer />
                : props.tests.map(test =>
                    <Name>
                        <div>
                            <span>{i++}. </span> {test.name} | {test.questionsCount} вопросов
                        </div>
                        {props.authenticated === true
                            ? <div>
                                <MyButton >
                                    <PlayArrowIcon color='primary' />
                                </MyButton>
                                <DeleteButton />
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
                            </div>}
                    </Name>)}
                    
        </Wrapper>
    )
}

import React from 'react'
import styled from 'styled-components'
import DeleteButtonModal from '../admin/DeleteButtonModal';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MyButton from '../../util/MyButton'
import EmptyContainer from './EmptyContainer';
import { Link } from 'react-router-dom';

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
                        <div>
                            {props.authenticated === true
                                ? <Link to="/test">
                                    <MyButton tip="Пройти тест">
                                        <PlayArrowIcon color='primary' />
                                    </MyButton>
                                </Link>
                                : <Link to="/login">
                                    <PlayArrowIcon color='primary' />
                                </Link>
                            }
                            {props.role === 'admin'
                                &&
                                <DeleteButtonModal tip="Удалить тест" />
                            }
                        </div>
                    </Name>)}

        </Wrapper>
    )
}

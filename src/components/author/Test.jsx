import React from 'react'
import styled from 'styled-components'
import EmptyContainer from './EmptyContainer';
import TestInfo from '../TestInfo'

const Wrapper = styled.div`
width: 100%;
`;

export default function Test(props) {

    return (
        <Wrapper>
            {props.tests === undefined
                ? <EmptyContainer />
                : props.tests.map(test => <TestInfo
                    role={props.role}
                    authenticated={props.authenticated}
                    delTest={props.delTest}
                    name={test.name}
                    questionsCount={test.questionsCount}
                    testId={test.testId} />)}
        </Wrapper>
    )
}

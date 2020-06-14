import React from 'react'
import styled from 'styled-components'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
border:1px solid #8ec1da;
border-radius:4px;
box-shadow:
    inset 0 1px 3px #fff,
    inset 0 -1px #cbe6f2,
    0 0 3px #8ec1da;
background-color: #ddeef6;
color:#3985a8;
text-shadow:0 1px #fff;
width: calc(100% - 2px);
height: 250px;
`;

export default function EmptyContainer() {
    return (
        <Box>
            <h1>К сожалению, здесь еще пусто...<SentimentVeryDissatisfiedIcon fontSize="large"/></h1>
        </Box>
    )
}

import React from 'react'
import { CircularProgress } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import styled from 'styled-components';

const Wrapper = styled.div`
height:250px;
display:flex;
justify-content: center;
align-items:center;
padding-bottom: 20px;
text-align: center;
`;
const Label = styled.div`
font-size: 1.25em;
`;
export default function Downloading() {
    return (
        <Paper>
            <Wrapper>
                <Label>
                    <div>Подождите идет загрузка</div>
                    <div><CircularProgress style={{ display: 'flex',width:'100%'}} /></div>
                </Label>
                
            </Wrapper>
        </Paper>
    )
}

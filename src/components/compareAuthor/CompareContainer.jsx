import React, { Component } from 'react'
import styled from 'styled-components'

import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Container = styled.div`
display: flex;

`;

const CorrectContainer = styled.img`
width: auto;
max-width: 60%;
min-height: 450px;
min-width: 550px;
max-height: 600px; 
margin-bottom: 1em;
margin-top: 20px;
margin-left: 50px;
border-radius: 10px;
box-shadow: 0 0 5px 5px ${props => props.correct===true ? 'green' : 'red'};
`; 
export default class CompareContainer extends Component {



    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div>
                    
                    <CorrectContainer src="https://24smi.org/public/media/resize/800x-/celebrity/2019/01/12/9jhwwscdqigo-uiliam-golding.jpg" alt="Писатель" />
                    <div>1</div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

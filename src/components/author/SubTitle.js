import styled from 'styled-components';
import React from 'react';
import EditButton from './EditButton';
import AddButton from './AddButton';


const Background = styled.div`
display: flex;
width:100%;
height: 3em;
background: ${props => props.theme.background};
margin-bottom: 1em;
margin-top: 1em;
align-items: center;
justify-content: space-between;
`;

const Name = styled.div`
font-size: 1.5em;
padding-left: 1em;
font-weight: bold;
`;

export default function SubTitle(props) {
    return (
        <Background>
            <Name align='left'>{props.name}</Name>
            <div style={{ paddingRight: '6px' }}>
                {props.add &&       
                <AddButton addId={'1'} addFunc={()=>alert()} />
                }                
                {props.edit &&
                    <EditButton editId={'d'} editFunc={()=>alert('edited')}/>
                }
            </div>

        </Background>
    )
}

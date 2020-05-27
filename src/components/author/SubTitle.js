import styled from 'styled-components';
import React from 'react';
import EditButton from '../adminButtons/EditButton';
import AddButton from '../adminButtons/AddButton';
import {connect} from 'react-redux';

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

 function SubTitle(props) {

    const AdminButtons = props.authenticated
        ? <div style={{ paddingRight: '6px' }}>
            {props.add &&
                <AddButton addId={'1'} tip={props.tip} addFunc={props.addFunc} />
            }
            {props.edit &&
                <EditButton editId={'d'} tip={props.tip} editFunc={props.editFunc} />
            }
        </div>
        : null
    return (
        <Background>
            <Name align='left'>{props.name}</Name>
{AdminButtons}

        </Background>
    )
}
let mapStateToProps = (state)=>({
    authenticated:state.user.authenticated
})
export default connect(mapStateToProps,null)(SubTitle)
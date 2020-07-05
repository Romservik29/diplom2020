import styled from 'styled-components';
import React from 'react';
import EditButton from '../admin/EditButton';
import DeleteButtonList from '../admin/DeleteButtonList';
import { connect } from 'react-redux';
import {changeBio} from '../../redux/actions/authorActions'

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

const SubTitle = (props) => {
    return (
        <Background>
            <Name align='left'>{props.name}</Name>
            {
                props.role === 'admin'
                && <div style={{ paddingRight: '6px' }}>
                    {props.delete
                        ? <DeleteButtonList data={props.data} delFunc={props.delFunc} />
                        : props.edit
                        && <EditButton authorId={props.authorId} changeBio={props.changeBio} bio={props.bio}/>
                    }
                </div>

            }
        </Background >
    )
}
let mapStateToProps = (state) => ({
    role: state.user.credentials.role
})
export default connect(mapStateToProps, {changeBio})(SubTitle)
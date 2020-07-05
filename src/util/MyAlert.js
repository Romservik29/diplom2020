import React from 'react';
import {Alert,AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import { connect } from 'react-redux';
import {closeAlert} from '../redux/actions/uiActions'
const Wrapper = styled.div`
width: max-content;
max-width: 300px;
position: fixed;
bottom: 1%;
left:1em;
`;

const MyAlert =(props) => {
      
    return(
    <Wrapper>
    <Collapse timeout={1300} in={props.isAlert}>
        <Alert severity={props.severity}
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        props.closeAlert();
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }
        ><AlertTitle>{props.title}</AlertTitle>
            {props.message}
      </Alert>
    </Collapse>

</Wrapper>
);}

const mapStateToProps = (state)=>({
    isAlert: state.UI.isAlert,
    title: state.UI.titleAlert,
    message: state.UI.messageAlert,
    severity: state.UI.severityAlert
})

export default connect(mapStateToProps, {closeAlert})(MyAlert)
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux'
import styled from 'styled-components'

const Gress = styled.div`
position: sticky;
top: 0px;
z-index: 1500;
`;

const ProgressBar = (props) => {
  return (
    <>
      {props.loading||props.loadingUser === true
        ? <Gress><LinearProgress /></Gress>
        : null
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.UI.loading,
  loadingUser: state.user.loading
})
export default connect(mapStateToProps, {})(ProgressBar)
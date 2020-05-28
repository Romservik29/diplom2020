import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux'

const ProgressBar = (props) => {
  return (
    <>
      {props.loading === true
        ? <LinearProgress />
        : <div style={{height: '4px'}}/>
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.UI.loading
})
export default connect(mapStateToProps, {})(ProgressBar)
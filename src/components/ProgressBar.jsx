import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {connect} from 'react-redux'


function ProgressBar() {
  return (
      <LinearProgress />
  );
}
const mapStateToProps =(state)=>({
  loading: state.UI.loading
})
export default connect(mapStateToProps,{})(ProgressBar)
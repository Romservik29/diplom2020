import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

 const ProtectRoute= ({component: Component, authenticated, ...rest}) => {
    return (
        
        <Route
        {...rest}
        render={(props)=> 
        authenticated === true  ? <Component {...props}/> : <Redirect to='/login'/> }
        />
    )
}

const mapStateToProps =(state)=>({
    authenticated: state.user.authenticated
})
/*
AuthRoute.PropTypes = {
    user: PropTypes.object
}
*/
export default connect(mapStateToProps)(ProtectRoute);
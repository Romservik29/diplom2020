import React from 'react'

import { Redirect } from 'react-router-dom'
const home = () => {
    return (
        <Redirect to="/authors" />
    )
}

export default home

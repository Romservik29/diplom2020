import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MyButton from '../util/MyButton'


export default function nextPageMovie() {
    return (
        <div>
            <MyButton>
            <ArrowForwardIosIcon style={{color:'red'}}/>
            </MyButton>
        </div>
    )
}

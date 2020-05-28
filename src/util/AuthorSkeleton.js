import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import NoImg from '../images/4.png';

const styles = {
    wrapper: {
        flexWrap: 'wrap',
        marginBottom: 25,
    },
    bioImg: {
        border: '1px solid #dce2e9',
        padding: 20,
        backgroundColor: 'aliceblue'
    },
    bioDisc: {
        textDecoration: 'none',
        minWidth: 248,
        color: 'black',
    },
    years: {
        fontStyle: 'italic',
        color: '#697678',
        fontSize: 14,
    },
    surname: {
        width: '30%',
        height: 21,
        backgroundColor: 'rgba(0,0,0, 0.8)',
        marginBottom: 5,
        marginTop: 3,
    },
    name: {
        width: '70%',
        height: 21,
        backgroundColor: 'rgba(0,0,0, 0.4)',
        marginBottom: 5,
    },
    time:{
        width: '90%',
        height: 21,
        backgroundColor: 'rgba(0,0,0, 0.2)',
    }
};

class authorInfo extends Component {
    
    render() {
        const { classes
        } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classes.bioImg}>
                    <div><img width="220px" height="290px" src={NoImg} alt="Автор" /></div>
                </div>
                <div className={classes.bioDisc}>
                    <div className={classes.surname}/>
                    <div className={classes.name}/>
                    <div className={classes.years}>
                        <time>
                            <div className={classes.time}/>
                        </time>
                    </div>
                </div>
            </div>
        )
    }
}

/*
const mapStateToProps = (state) => ({
    user: state.user
});*/

export default withStyles(styles)(authorInfo);
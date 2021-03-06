import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const styles:any = {
    wrapper: {
        flexWrap: 'wrap',
        marginBottom: 25,
        paddingTop: 20,
    },
    bioImg: {
        border: '1px solid #dce2e9',
        padding: 20,
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
        fontWeight: 'Bold',
        fontSize: 16,
    },
    name: {
        fontSize: 14,
    },
};
const Hover = styled(Link)`
:hover{
    text-decoration: underline;
}
`;

type AuthorInfoProps ={
    author: import('../redux/reducers/authorReducer').AuthorDescription
    classes: any
}

class authorInfo extends Component<AuthorInfoProps,AuthorInfoProps,any>{

    render() {
        const { classes,
            author: {
                firstName,
                lastName,
                midName,
                portretUrl,
                yearOfLife,
                authorId,
            }
        } = this.props;

        return (
            <div className={classes.wrapper}>
                <div className={classes.bioImg}>
                    <div><img width="220px" height="290px" src={portretUrl} alt={firstName} /></div>
                </div>
                <Hover className={classes.bioDisc} to={`/authors/${authorId}`}>
                    <div className={classes.surname}>{lastName}</div>
                    <div className={classes.name}>{`${firstName} ${midName}`}</div>
                    <div className={classes.years}>
                        <time>
                            {yearOfLife}
                        </time>
                    </div>
                </Hover>
            </div>
        )
    }
}

export default withStyles(styles)(authorInfo);
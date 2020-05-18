import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom'

const styles = {
    wrapper:{
        flexWrap: 'wrap',
        marginBottom: 25,
    },
    bioImg:{
        border: '1px solid #dce2e9',
        padding: 20,
    },
    bioDisc:{
        textDecoration: 'none',
        minWidth: 248,
        color: 'black',        
    },
    years:{
    fontStyle: 'italic',
    color:'#697678',
    fontSize: 14,
    },
    surname:{
        fontWeight: 'Bold',
        fontSize: 16,
    },
    name:{
        fontSize: 14,
    }
};

class authorInfo extends Component {
    render() {
        const { classes,
            author: {
                name,
                portretUrl,
                yearOfLife,
                authorId,
            }
        } = this.props;

        /*  const deleteButton =
            authenticated && userHandle === handle ? (
              <DeleteScream screamId={screamId} />
            ) : null;*/
        return(
            <div className={classes.wrapper}>
                <div className={classes.bioImg}>
                    <div><img src={portretUrl} alt={name}/></div>
                </div>
                <Link className={classes.bioDisc} to={`/authors/${authorId}`}>
                    <div className={classes.surname}>Пушкин</div>
                    <div className={classes.name}>Александр Сергеевич</div>
                    <div className={classes.years}>
                        <time>
                            {yearOfLife}
                        </time>
                    </div>
                </Link>
            </div>
        )
    }
}

/*
const mapStateToProps = (state) => ({
    user: state.user
});*/

export default withStyles(styles)(authorInfo);
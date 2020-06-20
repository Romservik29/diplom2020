import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import AuthorInfo from '../components/AuthorInfo';
import { connect } from 'react-redux'
import { getAuthors } from '../redux/actions/authorActions'
import AuthorSkeleton from '../util/AuthorSkeleton'
import Pagination from '@material-ui/lab/Pagination';

class authors extends Component {
    state = {
        currentPage: 1
    }

    componentDidMount() {
        this.props.getAuthors()
    }
    handlePageClick = (e, p) => {
        this.setState({
            currentPage: p,
        }, () => {
            this.props.getAuthors(this.state.currentPage)
        });
    };



    render() {
        let { authors, loading } = this.props;
        return (
            <Grid style={{ background: '#fff', height: '100%' }} container justify='space-around'>{console.log('render')}
                {(loading
                    ? Array.from(new Array(6)) : authors).map((author, index) => <Grid item>
                        {author
                            ? <AuthorInfo key={author.id} author={author} sm={4} xs={4} />
                            : <AuthorSkeleton key={index} sm={4} xs={4} />}
                    </Grid>)
                }
                <Grid
                    container
                    alignItem='center'
                    justifyContent='center'
                    xs={12}
                >
                     <Pagination style={{ margin: 'auto', padding: '10px', paddingBottom: '20px' }}
                        defaultPage={1}
                        page={this.state.currentPage}
                        count={3}
                        onChange={this.handlePageClick}
                        variant="outlined"
                        shape="rounded" />
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = (state) => ({
    authors: state.author.authors,
    loading: state.UI.loading,
    loadingUser: state.user.loading
})
export default connect(mapStateToProps, { getAuthors })(authors)
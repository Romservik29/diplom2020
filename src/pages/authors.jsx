import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import AuthorInfo from '../components/AuthorInfo';
import { connect } from 'react-redux'
import { getAuthors } from '../redux/actions/authorActions'
import ReactPaginate from 'react-paginate'
import './authors.css'
import AuthorSkeleton from '../util/AuthorSkeleton'

class authors extends Component {
    state = {
        perPage: 10,
        currentPage: 0
    }

    componentDidMount() {
        this.props.getAuthors()
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;

        this.setState({
            currentPage: selectedPage,
        }, () => {
            this.props.getAuthors(this.props.currentPage)
        });
    };

    render() {
        let { authors, loading } = this.props;
        return (
            <Grid style={{ background: '#fff', height: '100%' }} container justify='space-evenly'>{console.log('render')}
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
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={15}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = (state) => ({
    authors: state.author.authors,
    loading: state.UI.loading
})
export default connect(mapStateToProps, { getAuthors })(authors)
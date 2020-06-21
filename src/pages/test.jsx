import React, { Component } from 'react'
import Question from '../components/test/Question'
import { connect } from 'react-redux'
import { addAnswer, nextQuest, getTest, getTestResult } from '../redux/actions/testActions'
import {withRouter} from 'react-router-dom'

class Test extends Component {

    componentDidMount() {
        let testId = this.props.match.params.testId;
        this.props.getTest(testId)
    }

    render() {
        return (
            <div>
                <Question 
                test={this.props.test}
                loading={this.props.loading}
                addAnswer={this.props.addAnswer}
                nextQuest={this.props.nextQuest}
                getTestResult={this.props.getTestResult}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    test: state.test,
    loading: state.UI.loading
})

export default withRouter(connect(mapStateToProps, { addAnswer, nextQuest, getTest,getTestResult })(Test))


import React, { Component } from 'react'
import Question from '../components/test/Question'
import { connect } from 'react-redux'
import { addAnswer, nextQuest } from '../redux/actions/testActions'
class Test extends Component {



    render() {
        return (
            <div>
                <Question
                    test={this.props.test}
                    addAnswer={this.props.addAnswer}
                    nextQuest={this.props.nextQuest} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    test: state.test
})

export default connect(mapStateToProps, { addAnswer, nextQuest })(Test)


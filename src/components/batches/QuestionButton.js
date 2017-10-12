import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getRandomStudent from '../../actions/batches/getRandomStudent'

class QuestionButton extends PureComponent {

  fetchRandomStudent(){
    const { _id, students } = this.props.currentBatch
    this.props.getRandomStudent(_id, students)
  }

  render() {

    const name = this.props.currentBatch.randomStudent

    return (
      <article className="questionButton">
        <header>
          <h1>{(name) ? name : null }</h1>
        </header>
        <main>
          <button
            onClick={this.fetchRandomStudent.bind(this)}>
            Ask a question
          </button>
        </main>
      </article>
    );
  }
}

const mapStateToProps = ({ currentBatch }) => ({ currentBatch })

export default connect(mapStateToProps, { getRandomStudent })(QuestionButton)

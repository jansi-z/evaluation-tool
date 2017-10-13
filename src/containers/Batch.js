import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchStudents from '../actions/students/fetch'
import getCurrentBatch from '../actions/batches/get'
import subscribeToBatches from '../actions/batches/subscribe'
import QuestionButton from '../components/batches/QuestionButton'
import './Batch.css'

class Batch extends PureComponent {
  componentWillMount(){
    const { getCurrentBatch, subscribed } = this.props
    const batchId = this.props.match.params.batchId

    getCurrentBatch(batchId)
    if(!subscribed) subscribeToBatches()
  }

  returnStudentColor(currentColor){
    if (currentColor === 'red') return '#FF0000'
    else if (currentColor === 'green') return '#00FF00'
    else if (currentColor === 'yellow') return '#FFFF00'
  }

  renderStudent(student, index){
    const studentId = student._id
    const photo = student.photo
    const name = student.name
    const color = this.returnStudentColor(student.currentColor)

    return(
      <article key={index} className="studentItem">
        <header>
          <div
            className="photo"
            style={{ backgroundImage: `url(${photo})`}} />
          <h1>
            <a
              href={`/students/${studentId}`}
              className="title">
              {name}
            </a>
          </h1>
        </header>
        <div
          className="color"
          style={{ backgroundColor: `${color}`}}>
          <br />
        </div>
      </article>
    )
  }

  render() {
    debugger
    if (this.props.currentBatch === null) return null
    return (
      <div className="batch">
        <header>
          <h1>{ `Batch #${this.props.currentBatch.number}` }</h1>
          <QuestionButton />
        </header>
        <main>
          { this.props.currentBatch.students.map(this.renderStudent.bind(this)) }
        </main>
      </div>
    )
  }
}


const mapStateToProps = ({
    currentUser,
    batches,
    students,
    currentBatch,
    subscriptions }) => ({
      currentUser,
      batches,
      students,
      currentBatch,
      subscribed: subscriptions.includes('batches') })

export default connect(mapStateToProps, { push, fetchStudents, getCurrentBatch, subscribeToBatches })(Batch)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchStudents from '../actions/students/fetch'
import getCurrentBatch from '../actions/batches/get'
import Paper from 'material-ui/Paper'
import subscribeToBatches from '../actions/batches/subscribe'
import StudentItem from '../components/batches/StudentItem'
import QuestionButton from '../components/batches/QuestionButton'
import './Batch.css'

class Batch extends PureComponent {
  componentWillMount(){
    const { fetchStudents, getCurrentBatch, subscribed, batches } = this.props
    const batchId = this.props.match.params.batchId
    this.props.getCurrentBatch(batchId)
    if(!subscribed) subscribeToBatches()
  }

  renderStudent(student, index){
    const studentId = student._id
    const photo = student.photo
    const name = student.name

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
          style={{ backgroundColor: "#FF0000"}}>
          <br />
        </div>
      </article>
    )
  }

  render() {
    if (this.props.currentBatch === null) return null
    return (
      <div className="batch">
        <header>
          <h1>{ this.props.currentBatch.name }</h1>
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

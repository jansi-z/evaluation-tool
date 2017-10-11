import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getCurrentStudent from '../actions/students/get'

class Student extends PureComponent {
  componentWillMount() {
    const studentId = this.props.match.params.studentId

    getCurrentStudent(studentId)
  }

  render() {
    if (!currentStudent) return null

    return (
      <div className="studentPage">
        <header>
          <h1>{ this.props.currentStudent.name }</h1>
          <div className="studentInfo">
            <img src={ this.props.currentStudent.photo }>
            <ul>
              <li>Name: { this.props.currentStudent.name }</li>
              <li>Batch: { this.props.currentStudent.batch.name }</li>
              <li>Last evaluation: { this.props.currentStudent.lastEvaluation }</li>
            </ul>
          </div>
        </header>
        <main>

        </main>
      </div>
    )
  }
}

const mapStateToProps = ({
    currentUser,
    batches,
    students,
    currentStudent }) => ({
      currentUser,
      batches,
      students,
      currentStudent })

export default connect(mapStateToProps, { fetchStudents, getCurrentStudent })(Student)

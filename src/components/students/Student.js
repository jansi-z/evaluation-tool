import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getCurrentStudent from '../../actions/students/get'
import fetchStudents from '../../actions/students/fetch'
import EvaluationForm from './EvaluationForm'
import './Student.css'

class Student extends PureComponent {
  componentWillMount() {
    const studentId = this.props.match.params.studentId
    this.props.getCurrentStudent(studentId)
  }

  render() {
    const currentStudent = this.props.currentStudent

    if (!currentStudent) return null

    return (
      <div className="studentPage">
        <header>
          <h1>{ this.props.currentStudent.name }</h1>
          <div className="studentInfo">
            <img src={ this.props.currentStudent.photo } />
            <ul>
              <li>Name: { this.props.currentStudent.name }</li>
              <li>Batch: { this.props.currentStudent.batch.number }</li>
              <li>Last evaluation: { this.props.currentStudent.currentColor }</li>
            </ul>
          </div>
        </header>
        <main>
          <EvaluationForm />
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

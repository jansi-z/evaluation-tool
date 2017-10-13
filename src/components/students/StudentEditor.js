import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import getCurrentStudent from '../../actions/students/get'
import updateStudent from '../../actions/students/update'
import fetchBatches from '../../actions/batches/fetch'
import './CreateStudentForm.css'

class StudentEditor extends PureComponent {

  submitStudent(event){
    event.preventDefault()

    const studentId = this.props.currentStudent._id
    const batches = this.props.batches
    const name = this.refs.name.getValue()
    const photo = this.refs.photo.getValue()
    const batch = this.refs.batch.getValue()
    const batchId = (batches[(batch - 1)])._id
    const studentData = { name: name, photo: photo, batchId: batchId }

    this.props.updateStudent(studentId, studentData)

    document.getElementById("updateStudentForm").reset()
  }

  componentWillMount(){
    const studentId  = this.props.match.params.studentId
    const { getCurrentStudent, fetchBatches } = this.props
    getCurrentStudent(studentId)
    fetchBatches()
  }

  render() {

    const { currentStudent } = this.props
    if (!currentStudent) return null
    return (
      <div className="newBatch">
        <h2>Edit {currentStudent.name}</h2>
        <form id="updateStudentForm" onSubmit={ this.submitStudent.bind(this) }>
          <TextField
            hintText="Student name"
            floatingLabelText="Name:"
            defaultValue={currentStudent.name}
            ref="name"
          />
          <TextField
            hintText="Photo url"
            floatingLabelText="Photo link:"
            defaultValue={currentStudent.photo}
            ref="photo"
          />
          <TextField
            hintText="Batch number"
            floatingLabelText="Batch number:"
            defaultValue={(currentStudent.batch) ? currentStudent.batch.number : "No batch"}
            ref="batch"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, students, currentStudent }) => ({ batches, students, currentStudent })

export default connect(mapStateToProps, { updateStudent, getCurrentStudent, fetchBatches })(StudentEditor)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import createStudent from '../../actions/students/create'
import './CreateStudentForm.css'

class CreateStudentForm extends PureComponent {

  submitStudent(event){
    event.preventDefault()
    const batches = this.props.batches
    const name = this.refs.name.getValue()
    const photo = this.refs.photo.getValue()
    const batch = this.refs.batch.getValue()
    const batchId = (batches[(batch - 1)])._id
    const studentData = { name: name, photo: photo, batchId: batchId }

    this.props.createStudent(studentData)

    document.getElementById("createStudentForm").reset()
  }

  render() {

    const batches = this.props.batches

    return (
      <div className="newBatch">
        <h2>Create new student</h2>
        <form id="createStudentForm" onSubmit={ this.submitStudent.bind(this) }>
          <TextField
            hintText="Student name"
            floatingLabelText="Name:"
            ref="name"
          />
          <TextField
            hintText="Photo url"
            floatingLabelText="Link:"
            ref="photo"
          />
          <TextField
            hintText="Batch number"
            floatingLabelText="Number:"
            ref="batch"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, students }) => ({ batches, students })

export default connect(mapStateToProps, { createStudent })(CreateStudentForm)

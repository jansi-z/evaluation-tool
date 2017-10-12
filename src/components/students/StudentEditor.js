import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getStudent from '../../actions/students/get'
import updateStudent from '../../actions/students/update'
import './CreateStudentForm.css'

class StudentEditor extends PureComponent {

  submitStudent(event){
    event.preventDefault()
    const batches = this.props.batches
    const name = this.refs.name.getValue()
    const photo = this.refs.photo.getValue()
    const batch = this.refs.batch.getValue()
    const batchId = (batches[(batch - 1)])._id
    const studentData = { name: name, photo: photo, batchId: batchId }

    this.props.updateStudent(studentData)

    document.getElementById("updateStudentForm").reset()
  }

  componentWillMount(){
    debugger
    
  }

  render() {

    const { batches, currentStudent } = this.props

    return (
      <div className="newBatch">
        <h2>Edit {currentStudent.name}</h2>
        <form id="updateStudentForm" onSubmit={ this.submitStudent.bind(this) }>
          <TextField
            hintText="Student name"
            floatingLabelText="Name:"
            value={currentStudent.name}
            ref="name"
          />
          <TextField
            hintText="Photo url"
            floatingLabelText="Link:"
            value={currentStudent.photo}
            ref="photo"
          />
          <TextField
            hintText="Batch number"
            floatingLabelText="Number:"
            value={currentStudent.batch.number}
            ref="batch"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, students, currentStudent }) => ({ batches, students, currentStudent })

export default connect(mapStateToProps, { updateStudent })(StudentEditor)

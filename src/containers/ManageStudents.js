import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import fetchStudents from '../actions/students/fetch'
import fetchBatches from '../actions/batches/fetch'
import CreateStudentForm from '../components/students/CreateStudentForm'
import { push } from 'react-router-redux'

class ManageStudents extends PureComponent {

  componentWillMount(){
    const { fetchStudents, fetchBatches } = this.props

    fetchStudents()
    fetchBatches()
  }

  deleteStudent(click){
    const students = this.props.students
    const studentId = students[click.target.parentElement.parentElement.id]

  }

  editStudent(click){
    const { students, push } = this.props
    const studentId = students[click.target.parentElement.parentElement.id]
    debugger
    return () => {
      push(`/students/${studentId}/edit`)
    }
  }

  renderStudent(student, index){

    const { photo, name, currentColor, evaluationIds, batch } = student
    const evaluationNumber = evaluationIds.length

    return(
      <TableRow key={index} id={index}>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{(batch) ? batch.number : "No batch"}</TableRowColumn>
        <TableRowColumn>{currentColor}</TableRowColumn>
        <TableRowColumn>{(evaluationNumber) ? evaluationNumber : 0 }</TableRowColumn>
        <TableRowColumn><button onClick={this.editStudent.bind(this)}>Edit</button></TableRowColumn>
        <TableRowColumn><button onClick={this.deleteStudent.bind(this)}>Delete</button></TableRowColumn>
      </TableRow>
    )
  }

  render(){
    const students = this.props.students
    if (!students) return null
    return(
      <div className="studentManager">
        <div className="studentForm">
          <CreateStudentForm />
        </div>
        <div className="studentContainer">
          <Table
            fixedHeader={true}
            fixedFooter={false}
            selectable={false}
            multiSelectable={false}>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Batch</TableHeaderColumn>
                <TableHeaderColumn>Last evaluation</TableHeaderColumn>
                <TableHeaderColumn>Total evaluations</TableHeaderColumn>
                <TableHeaderColumn>Total evaluations</TableHeaderColumn>
                <TableHeaderColumn>Delete</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover={false}>
              { students.map(this.renderStudent.bind(this))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, batches, students }) => ({ currentUser, batches, students })

export default connect(mapStateToProps, { fetchBatches, fetchStudents, push })(ManageStudents)

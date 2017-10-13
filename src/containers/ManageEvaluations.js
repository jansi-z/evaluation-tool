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
import fetchEvaluations from '../actions/evaluations/fetch'
import fetchStudents from '../actions/students/fetch'
import { push } from 'react-router-redux'

class ManageEvaluations extends PureComponent {

  componentWillMount(){
    const { fetchStudents, fetchEvaluations } = this.props
    // fetchStudents()
    fetchEvaluations()
  }

  deleteEvaluation(click){
    const { evaluations } = this.props
    const evaluationId = (evaluations[click.target.parentElement.parentElement.id])._id

    debugger
  }

  renderEvaluation(evaluation, index){
    const students = this.props.students
    const { color, remark, studentId, date, _id } = evaluation
    const student = students.filter((student) => { return student._id === studentId })

    return(
      <TableRow key={index} id={index}>
        <TableRowColumn>{student.name}</TableRowColumn>
        <TableRowColumn>{date}</TableRowColumn>
        <TableRowColumn>{color}</TableRowColumn>
        <TableRowColumn>{remark}</TableRowColumn>
        <TableRowColumn><a href={`/evaluations/${_id}/edit`}>Edit</a></TableRowColumn>
        <TableRowColumn><button onClick={this.deleteEvaluation.bind(this)}>Delete</button></TableRowColumn>
      </TableRow>
    )
  }

  render(){
    const evaluations = this.props.evaluations
    if (!evaluations) return null
    return(
      <div className="evaluationManager">
        <div className="evaluationContainer">
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
                <TableHeaderColumn>Student</TableHeaderColumn>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Color</TableHeaderColumn>
                <TableHeaderColumn>Remark</TableHeaderColumn>
                <TableHeaderColumn>Edit</TableHeaderColumn>
                <TableHeaderColumn>Delete</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover={false}>
              { evaluations.map(this.renderEvaluation.bind(this))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, students, evaluations }) => ({ currentUser, students, evaluations })

export default connect(mapStateToProps, { fetchStudents, fetchEvaluations, push })(ManageEvaluations)

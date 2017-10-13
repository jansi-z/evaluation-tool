import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import getCurrentEvaluation from '../../actions/evaluations/get'
import updateEvaluation from '../../actions/evaluations/update'
import fetchStudents from '../../actions/students/fetch'

class EvaluationEditor extends PureComponent {

  componentWillMount(){
    const evaluationId  = this.props.match.params.evaluationId
    const { getCurrentEvaluation, fetchStudents } = this.props
    getCurrentEvaluation(evaluationId)
    fetchStudents()
  }

  state = {
    value: (this.props.currentEvaluation) ? this.props.currentEvaluation.color : "green",
  };

  handleChange = (event, index, value) => this.setState({value});

  submitEvaluation(event){
    event.preventDefault()
    const evaluationId = this.props.currentEvaluation._id
    const date = this.refs.date.refs.input.input.value
    const color = this.refs.color.props.value
    const remark = this.refs.remarks.getValue()
    const evaluationData = { date: date, color: color, remark: remark }

    this.props.updateEvaluation(evaluationId, evaluationData)

    document.getElementById("evaluationForm").reset()
  }

  returnStudentName(currentEvaluation, students){
    const student = (students.filter((student) => { return (student._id).toString() === (currentEvaluation.studentId).toString() }))[0]

    if (student) return student.name
  }

  render() {

    const currentEvaluation = this.props.currentEvaluation
    const students = this.props.students
    if (!currentEvaluation || !students) return null
    return (
      <div className="evaluation">
        <h2>{`Edit evaluation for ${this.returnStudentName(currentEvaluation, students)}`}</h2>
        <form id="evaluationForm" onSubmit={ this.submitEvaluation.bind(this) }>
          <DatePicker
            hintText="Date"
            ref="date"
            defaultValue={currentEvaluation.date} />
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            ref="color"
          >
            <MenuItem value={"green"} primaryText="Green" />
            <MenuItem value={"yellow"} primaryText="Yellow" />
            <MenuItem value={"red"} primaryText="Red" />
          </SelectField>
          <TextField
            hintText="Remarks"
            floatingLabelText="Remarks:"
            ref="remarks"
            defaultValue={currentEvaluation.remark}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentEvaluation, students }) => ({ currentEvaluation, students })

export default connect(mapStateToProps, { updateEvaluation, getCurrentEvaluation, fetchStudents })(EvaluationEditor)

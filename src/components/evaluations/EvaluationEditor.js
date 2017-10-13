import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import getCurrentEvaluation from '../../actions/evaluations/get'
import updateEvaluation from '../../actions/evaluations/update'
import './CreateEvaluationForm.css'

class EvaluationEditor extends PureComponent {

  componentWillMount(){
    const evaluationId  = this.props.match.params.evaluationId
    const { getCurrentEvaluation } = this.props
    getCurrentEvaluation(evaluationId)
  }

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

  render() {

    const currentEvaluation = this.props.currentEvaluation

    return (
      <div className="evaluation">
        <h2>Edit evaluation for {currentEvaluation.student.name}</h2>
        <form id="evaluationForm" onSubmit={ this.submitEvaluation.bind(this) }>
          <DatePicker
            hintText="Date"
            ref="date"
            defaultValue={currentEvaluation.date} />
          <SelectField
            value={currentEvaluation.color}
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

const mapStateToProps = ({ currentEvaluation }) => ({ currentEvaluation })

export default connect(mapStateToProps, { updateEvaluation, getCurrentEvaluation })(EvaluationEditor)

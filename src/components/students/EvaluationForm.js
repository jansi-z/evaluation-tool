import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import './EvaluationForm.css'

class EvaluationForm extends PureComponent {

  state = {
    value: "green",
  };

  handleChange = (event, index, value) => this.setState({value});

  submitEvaluation(event){
    event.preventDefault()
    // debugger
    const date = this.refs.date.refs.input.input.value
    const color = this.refs.color.props.value
    const remarks = this.refs.remarks.getValue()
    const author = this.props.currentUser._id
    const evaluationData = { date: date, color: color, remark: remarks, author: author }
  }

  render() {

    return (
      <div className="evaluation">
        <h2>Evaluate student</h2>
        <form id="evaluationForm" onSubmit={ this.submitEvaluation.bind(this) }>
          <DatePicker
            hintText="Date"
            ref="date" />
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
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentStudent, currentUser }) => ({ currentStudent, currentUser })

export default connect(mapStateToProps)(EvaluationForm)

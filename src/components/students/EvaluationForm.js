import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import './EvaluationForm.css'

class EvaluationForm extends PureComponent {

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {

    return (
      <div className="evaluation">
        <h2>Evaluate student</h2>
        <form id="evaluationForm">
          <DatePicker
            hintText="Date" />
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Green" />
            <MenuItem value={2} primaryText="Yellow" />
            <MenuItem value={3} primaryText="Red" />
          </SelectField>
          <TextField
            hintText="Remarks"
            floatingLabelText="Remarks:"
            ref="remarks"
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentStudent, currentUser }) => ({ currentStudent, currentUser })

export default connect(mapStateToProps)(EvaluationForm)

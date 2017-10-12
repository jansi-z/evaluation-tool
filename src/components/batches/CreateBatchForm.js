import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import createBatch from '../../actions/batches/create'
import './CreateBatchForm.css'

class createBatchForm extends PureComponent {

  handleChange = (event, index, value) => this.setState({value});

  submitBatch(event){
    event.preventDefault()
    const startDate = this.refs.startDate.refs.input.input.value
    const endDate = this.refs.endDate.refs.input.input.value
    const number = this.refs.number.getValue()
    const batchData = { startDate: startDate, endDate: endDate, number: number }

    this.props.createBatch(batchData)

    document.getElementById("createBatchForm").reset()
  }

  render() {

    return (
      <div className="newBatch">
        <h2>Create new Batch</h2>
        <form id="createBatchForm" onSubmit={ this.submitBatch.bind(this) }>
          <DatePicker
            hintText="Start date"
            ref="startDate" />
          <DatePicker
            hintText="End date"
            ref="endDate" />
          <TextField
            hintText="Batch number"
            floatingLabelText="Number:"
            ref="number"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, { createBatch })(createBatchForm)

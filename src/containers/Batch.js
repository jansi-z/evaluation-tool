import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchStudents from '../actions/students/fetch'
import getCurrentBatch from '../actions/batches/get'
import Paper from 'material-ui/Paper'
import subscribeToBatches from '../actions/batches/subscribe'

class Batch extends PureComponent {
  componentWillMount(){
    const { fetchStudents, getCurrentBatch, subscribed, batches } = this.props
    const batchId = this.props.match.params.batchId
    this.props.getCurrentBatch(batchId)
    if(!subscribed) subscribeToBatches()
  }

  renderStudent(){

  }

  render() {
    if (this.props.currentBatch === null) return null
    return (
      <div className="batch">
        <h1>{this.props.currentBatch.name}</h1>
        <Paper className="studentList">
        </Paper>
      </div>
    )
  }
}


const mapStateToProps = ({
    currentUser,
    batches,
    students,
    currentBatch,
    subscriptions }) => ({
      currentUser,
      batches,
      students,
      currentBatch,
      subscribed: subscriptions.includes('batches') })

export default connect(mapStateToProps, { push, fetchStudents, getCurrentBatch, subscribeToBatches })(Batch)

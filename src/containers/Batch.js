import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchStudents from '../actions/students/fetch'
import getCurrentBatch from '../actions/batches/get'
import Paper from 'material-ui/Paper'

class Batch extends PureComponent {
  componentWillMount(){
    const { fetchStudents, getCurrentBatch } = this.props
    const batchId = this.props.match.params.batchId
    debugger
    getCurrentBatch(batchId)
  }

  renderStudent(){

  }

  render() {
    debugger
    return (
      <div className="batch">
        <h1>{this.props.currentBatch.name}</h1>
        <Paper className="studentList">
        </Paper>
      </div>
    )
  }
}


const mapStateToProps = ({ currentUser, batches, students, currentBatch }) => ({ currentUser, batches, students, currentBatch })

export default connect(mapStateToProps, { push, fetchStudents, getCurrentBatch })(Batch)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import fetchBatches from '../actions/batches/fetch'

class Homepage extends PureComponent {
  componentWillMount() {
    const { fetchBatches } = this.props
    fetchBatches()
  }

  goToBatch(batchId) {
    const { push } = this.props
    return () => {
      push(`/batches/${batchId}`)
    }
  }

  renderBatch(batch, index) {
    const startDate = batch.startDate.toString()
    const endDate = batch.endDate.toString()
    const dates = startDate.substr(0, 10)+" to "+endDate.substr(0, 10)

    return (
      <MenuItem
        key={index}
        onClick={this.goToBatch(batch._id).bind(this)}
        primaryText={batch.name}
        secondaryText={dates} />
    )
  }

  render() {
    return (
      <div className="Homepage">
        <h1 id="logo">Welcome to student evaluation assignment!</h1>
        <Paper className="batchList">
          <Menu>
            { this.props.batches.map(this.renderBatch.bind(this))}
          </Menu>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, batches }) => ({ currentUser, batches })

export default connect(mapStateToProps, { push, fetchBatches })(Homepage)

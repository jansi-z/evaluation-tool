import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import fetchBatches from '../actions/batches/fetch'
import subscribeToBatchesService from '../actions/batches/subscribe'
import './Homepage.css'

class Homepage extends PureComponent {
  componentWillMount() {
    const { fetchBatches, subscribeToBatchesService, subscribed } = this.props
    fetchBatches()
    if (!subscribed) subscribeToBatchesService()
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
        className="menuItem"
        key={index}
        onClick={this.goToBatch(batch._id).bind(this)}
        primaryText={`Batch #${batch.number}`}
        secondaryText={dates} />
    )
  }

  render() {
    const currentUser = this.props.currentUser

    if (!currentUser) return (<h1>Please log in</h1>)

    return (
      <div className="Homepage">
        <h1 id="logo">Welcome, {currentUser.name}!</h1>
        <main>
          <Paper className="batchList">
            <Menu className="batches">
              { this.props.batches.map(this.renderBatch.bind(this))}
            </Menu>
          </Paper>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, batches, subscriptions }) => ({ currentUser, batches, subscribed: subscriptions.includes('batches') })

export default connect(mapStateToProps, { push, fetchBatches, subscribeToBatchesService })(Homepage)

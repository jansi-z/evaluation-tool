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
import fetchBatches from '../actions/batches/fetch'
import CreateBatchForm from '../components/batches/CreateBatchForm'
import subscribeToBatchesService from '../actions/batches/subscribe'

class ManageBatches extends PureComponent {

  componentWillMount(){
    const { fetchBatches, subscribed } = this.props

    fetchBatches()
    if (!subscribed) subscribeToBatchesService()
    debugger
  }

  deleteBatch(click){
    const batches = this.props.batches
    const batch = batches[click.target.parentElement.parentElement.id]
    debugger
  }

  renderBatch(batch, index){

    const { number, startDate, endDate } = batch

    return(
      <TableRow key={index} id={index}>
        <TableRowColumn>{number}</TableRowColumn>
        <TableRowColumn>{startDate}</TableRowColumn>
        <TableRowColumn>{endDate}</TableRowColumn>
        <TableRowColumn><button onClick={this.deleteBatch.bind(this)}>Delete</button></TableRowColumn>
      </TableRow>
    )
  }

  render(){
    const batches = this.props.batches
    if (!batches) return null
    return(
      <div className="batchManager">
        <div className="batchForm">
          <CreateBatchForm />
        </div>
        <div className="batchContainer">
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
                <TableHeaderColumn>Number</TableHeaderColumn>
                <TableHeaderColumn>Start date</TableHeaderColumn>
                <TableHeaderColumn>End date</TableHeaderColumn>
                <TableHeaderColumn>Delete</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover={false}>
              { batches.map(this.renderBatch.bind(this))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, batches, subscriptions }) => ({ currentUser, batches, subscribed: subscriptions.includes('batches') })

export default connect(mapStateToProps, { fetchBatches, subscribeToBatchesService })(ManageBatches)

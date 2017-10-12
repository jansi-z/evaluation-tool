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

class ManageBatches extends PureComponent {

  componentWillMount(){
    this.props.fetchBatches()
  }

  deleteBatch(click){
    const batches = this.props.batches
    const batch = batches[click.target.parentElement.parentElement.id]
    debugger
  }

  renderBatch(batch, index){

    const { name, startDate, endDate } = batch

    return(
      <TableRow key={index} id={index}>
        <TableRowColumn>{name}</TableRowColumn>
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
              <TableHeaderColumn>Name</TableHeaderColumn>
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
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, { fetchBatches })(ManageBatches)

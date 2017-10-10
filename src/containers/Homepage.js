import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import fetchClasses from '../actions/classes/fetch'

class Homepage extends PureComponent {
  componentWillMount() {
    const { fetchClasses } = this.props
    fetchClasses()
  }

  goToClass(classId) {
    const { push } = this.props
    return () => {
      push(`/classes/${classId}`)
    }
  }

  renderClass(batch, index) {
    const startDate = batch.startDate.toString()
    const endDate = batch.endDate.toString()
    const dates = startDate.substr(0, 10)+" to "+endDate.substr(0, 10)

    return (
      <MenuItem
        key={index}
        onClick={this.goToClass(batch._id).bind(this)}
        primaryText={batch.name}
        secondaryText={dates} />
    )
  }

  render() {
    return (
      <div className="Homepage">
        <h1 id="logo">Welcome to student evaluation assignment!</h1>
        <Paper className="classList">
          <Menu>
            { this.props.classes.map(this.renderClass.bind(this))}
          </Menu>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, classes }) => ({ currentUser, classes })

export default connect(mapStateToProps, { push, fetchClasses })(Homepage)

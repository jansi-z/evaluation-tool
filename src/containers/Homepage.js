import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Homepage extends PureComponent {
  render() {
    return (
      <div className="Homepage">
        <h1 id="logo">Welcome to student evaluation assignment!</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps, { push })(Homepage)

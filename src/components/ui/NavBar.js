import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../../actions/users/signOut'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import HomeIcon from 'material-ui/svg-icons/action/home'

const TITLE = 'Evaluation Tool'

class NavBar extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
    this.signUp = this.signUp.bind(this)
    this.goHome = this.goHome.bind(this)
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  signUp() {
    this.props.push('/sign-up')
  }

  signIn() {
    this.props.push('/sign-in')
  }

  goHome() {
    this.props.push('/')
  }

  manageBatches(){
    this.props.push('/manage/batches')
  }

  manageStudents(){
    this.props.push('/manage/students')
  }

  render() {
    const { signedIn, currentUser } = this.props

    const UnLogged = () => (
      <IconMenu
        iconButtonElement={ <IconButton><MenuIcon color="FFF" /></IconButton> }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Sign in" onClick={this.signIn} />
        <MenuItem primaryText="Sign up" onClick={this.signUp} />
      </IconMenu>
    );

    // UnLogged.muiName = 'IconMenu';

    const Logged = () => (
      <IconMenu
        iconButtonElement={ <IconButton><MenuIcon color="FFF" /></IconButton> }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Sign out" onClick={this.signOut.bind(this)} />
        <MenuItem primaryText="Manage batches" onClick={this.manageBatches.bind(this)} />
        <MenuItem primaryText="Manage students" onClick={this.manageStudents.bind(this)} />
      </IconMenu>
    );

    // Logged.muiName = 'IconMenu';

    return (
      <AppBar
        title={(currentUser) ? `Signed in as ${currentUser.name}` : TITLE }
        iconElementLeft={<IconButton onClick={this.goHome}><HomeIcon /></IconButton>}
        iconElementRight={signedIn ?
          <Logged /> : <UnLogged />
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { push, signOut })(NavBar)

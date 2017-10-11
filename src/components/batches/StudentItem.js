import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import './StudentItem.css'

class StudentItem extends PureComponent {

  goToStudent(studentId) {
    const { push } = this.props
    return () => {
      push(`/students/${studentId}`)
    }
  }

  render () {
    const { _id, photo, name } = this.props
    debugger
    return(
      <article className="studentItem">
        <header>
          <div
            className="photo"
            style={{ backgroundImage: `url(${photo})`}} />
          <h1>
            <a
              href="#"
              className="title"
              onClick={this.goToStudent(_id).bind(this)}>
              {name}
            </a>
          </h1>
        </header>
        <div
          className="color"
          style={{ backgroundColor: "#FF0000"}}>
          <br />
        </div>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser, currentBatch }) => ({ currentUser, currentBatch })

export default connect(mapStateToProps, { push })(StudentItem)

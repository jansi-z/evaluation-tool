import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class QuestionButton extends PureComponent {
  render() {

    const name = this.props.randomStudent.name

    return (
      <article className="questionButton">
        <header>
          <h1>{ name || null }</h1>
        </header>
        <main>
          <a href="#"
            onClick={this.props.fetchRandomStudent.bind(this)}>
            Ask a question
          </a>
        </main>
      </article>
    );
  }
}

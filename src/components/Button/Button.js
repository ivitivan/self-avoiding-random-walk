import React, {Component} from 'react'

export default class Button extends Component {
  handleClick = (event) => {
    event.preventDefault()

    this.props.onClick()
  }
  render() {
    const {
      children,
    } = this.props

    return <button type='button' onClick={this.handleClick}>{children}</button>
  }
}

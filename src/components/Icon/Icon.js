import React, {Component} from 'react'

export default class Icon extends Component {
  render() {
    switch (this.props.name) {
      case 'InfoOutline':
        return <InfoOutline/>
      case 'PlayArrow':
        return <PlayArrow/>
      default:
        return null
    }
  }
}

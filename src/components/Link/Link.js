import React, {Component, PropTypes} from 'react'
import './Link.css'

export class Link extends Component {
  static propTypes = {
    children: PropTypes.string,
    href: PropTypes.string,
  }

  render() {
    const { children, href } = this.props

    return <a href={href} className='link'>
      {children}
    </a>
  }
}

import React, {Component} from 'react'
import {Link} from '../Link'
import './Info.css'

export class Info extends Component {
  render() {
    return <div className='info'>
      A <Link href='https://en.wikipedia.org/wiki/Self-avoiding_walk'>self-avoiding walk</Link> (SAW) is a sequence of moves on a lattice (a lattice path) that does not visit the same point more than once.
    </div>
  }
}


import React, { Component } from 'react'
import './Statistics.css'

export class Statistics extends Component {
  render() {
    const {
      escapes,
      percentage,
    } = this.props

    return <div className='statistics'>
      <div><label className='label'>Number of escapes: </label>{escapes}</div>
      <div><label className='label'>Percentage: </label>{percentage}</div>
    </div>
  }
}

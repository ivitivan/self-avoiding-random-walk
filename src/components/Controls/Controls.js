import React, {Component, PropTypes} from 'react'
import {Input} from '../Input'
import {PlayArrow} from '../Icon/Icons/PlayArrow'
import './Controls.css'

export class Controls extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    m: this.props.m,
    n: this.props.n,
    experiments: this.props.experiments,
  }

  handleFormChange = (name) => (event) => {
    const rawValue = event.target.value
    const value = rawValue === '' ? '' : parseInt(event.target.value)

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state)
  }

  render() {
    const {
      m, n, experiments,
    } = this.state

    return <form
      className='controls'
      onSubmit={this.handleSubmit}
    >
      <Input name='Rows:' type='text' onChange={this.handleFormChange('m')} value={m}/>
      <Input name='Columns:' type='text' onChange={this.handleFormChange('n')} value={n}/>
      <Input name='Experiments:' type='text' placeholder='experiments' onChange={this.handleFormChange('experiments')} value={experiments}/>
      <button className='controls_run'><PlayArrow/></button>
    </form>
  }
}

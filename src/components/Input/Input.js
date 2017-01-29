import React, {Component, PropTypes} from 'react'
import './Input.css'

export class Input extends Component {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    type: 'text',
    onChange: () => {},
    value: '',
  }

  render() {
    const {
      name,
      type,
      onChange,
      value,
    } = this.props

    return <label
      className='input'
    >
      <span
        className='input_label'
      >
        {name}
      </span>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className='input_input'
      />
    </label>
  }
}

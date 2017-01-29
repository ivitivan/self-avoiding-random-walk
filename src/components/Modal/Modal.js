import React, {Component} from 'react'
import './Modal.css'

export class Modal extends Component {
  closeModal = () => {
    this.props.store.dispatch({
      type: 'MODAL_CLOSE',
    })
  }

  render() {
    const {show, element} = this.props.modal || {}

    if (show) {
      return <div className='modal'
        onClick={this.closeModal}
      >
        {element}
      </div>
    }
    else return null
  }
}

import React, {Component} from 'react'
import './Header.css'

export class Header extends Component {
  showInfo = () => {
    this.props.store.dispatch({
      type: 'MODAL',
      payload: {
        modal: <Info/>
      }
    })
  }

  render() {
    return <header className='header'>
      <h1 className='title'>Self Avoiding Random Walk</h1>
    </header>
  }
}

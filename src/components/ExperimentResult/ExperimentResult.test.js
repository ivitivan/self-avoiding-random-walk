import React from 'react'
import ReactDOM from 'react-dom'
import {ExperimentResult} from './ExperimentResult'

test('renders without props', () => {
  const div = document.createElement('div')

  ReactDOM.render(<ExperimentResult/>, div)
})

test('renders without crashing', () => {
  const div = document.createElement('div')
  const m = 5
  const n = 5
  const experiments = 10

  ReactDOM.render(<ExperimentResult
    m={m}
    n={n}
    experiments={experiments}
  />, div)
})


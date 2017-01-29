import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import {createStore} from 'redux'
import selfAvoidingWalk from './lib/self-avoiding-walk/self-avoiding-walk'
import './index.css'
import App from './components/App/App'

const experiment = ({
  m, n, experiments,
}) => {
  const pathList = R.map(() => selfAvoidingWalk({m, n,}).path())(R.range(0, experiments))
  const escapes = R.compose(R.sum, R.map(i => i.successful ? 1 : 0))(pathList)
  const paths = R.map(i => i.data, pathList)
  const percentage = Math.round(escapes / experiments * 100 * 100) / 100

  return {
    paths, escapes, percentage,
  }
}

const defaultM = 10
const defaultN = 10
const defaultExperiments = 15
const defaultExperiment = experiment({
  m: defaultM, n: defaultN, experiments: defaultExperiments,
})

const reducer = (state = {
  m: defaultM,
  n: defaultN,
  experiments: defaultExperiments,
  paths: defaultExperiment.paths,
  escapes: defaultExperiment.escapes,
  percentage: defaultExperiment.percentage,
}, action) => {
  switch (action.type) {
    case 'RUN': {
      const {
        m, n, experiments,
      } = action.payload
      const {
        paths, escapes, percentage,
      } = experiment({m, n, experiments})

      return {
        ...state,
        m, n, experiments,
        paths, escapes, percentage,
      }
    }
    case 'MODAL':
      return {
        ...state,
        modal: {
          show: true,
          element: action.payload.modal,
        }
      }
    case 'MODAL_CLOSE':
      return {
        ...state,
        modal: {
          show: false,
        }
      }
    default:
      return state
  }
}

const store = createStore(reducer)
const render = () => {
  ReactDOM.render(
    <App
      store={store}
      state={store.getState()}
    />,
    document.getElementById('root')
  )
}

store.subscribe(render)

render()


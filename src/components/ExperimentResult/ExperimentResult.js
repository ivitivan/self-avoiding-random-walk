import React, {Component, PropTypes} from 'react'
import R from 'ramda'
import {SelfAvoiding} from '../SelfAvoidingWalk'
import './ExperimentResult.css'

const indexedMap = R.addIndex(R.map)

export class ExperimentResult extends Component {
  static propTypes = {
    m: PropTypes.number,
    n: PropTypes.number,
    experiments: PropTypes.number,
    paths: PropTypes.array,
  }

  static defaultProps = {
    m: 0,
    n: 0,
    experiments: 0,
    paths: [],
  }

  createList({
    m, n, paths,
  }) {
    return indexedMap((i, index) => <SelfAvoiding
      key={String(m) + String(n) + String(i) + index}
      m={m}
      n={n}
      path={i}
    />)(paths)
  }

  render() {
    const {
      m, n, paths,
    } = this.props

    return <div className='experiment-result'>
      {this.createList({m, n, paths})}
    </div>
  }
}

import React, {Component, PropTypes} from 'react'
import {Modal} from '../Modal'
import {Header} from '../Header'
import {Info} from '../Info'
import {Controls} from '../Controls'
import {Statistics} from '../Statistics'
import {ExperimentResult} from '../ExperimentResult'
import './App.css'

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object,
  }

  run = (values) => {
    this.props.store.dispatch({
      type: 'RUN',
      payload: values,
    })
  }

  render() {
    const {
      state, store,
    } = this.props
    const {
      m, n, experiments, paths, escapes, percentage, modal,
    } = state

    return <div className='app'>
      <Modal modal={modal} store={store}/>
      <Header store={store}/>
      <main className='main'>
        <section className='short'>
          <Info/>
          <Controls
            m={m}
            n={n}
            experiments={experiments}
            onSubmit={this.run}
          />
          <Statistics
            escapes={escapes}
            percentage={percentage}
          />
        </section>
        <section className='long'>
          <ExperimentResult
            paths={paths}
            m={m}
            n={n}
            experiments={experiments}
          />
        </section>
      </main>
    </div>
  }
}


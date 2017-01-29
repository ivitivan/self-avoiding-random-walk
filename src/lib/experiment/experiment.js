const experiment = ({
  n,
  run,
}) => {
  const theExperiment = {
    tests: [],
    stats: {},
  }

  const start = new Date()

  for (let i = 0; i < n; i++) {
    const test = run()

    theExperiment.tests.push({
      stats: {},
      result: test,
    })
  }

  const end = new Date() - start

  theExperiment.stats.time = `${end}ms`

  return theExperiment
}

export default experiment


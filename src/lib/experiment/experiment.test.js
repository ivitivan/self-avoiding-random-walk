import experiment from './experiment'
import selfAvoidingWalk from '../self-avoiding-walk/self-avoiding-walk'

test.skip('', () => {
  const actual = experiment({
    n: 100,
    run: () => 'hello',
  })
  const expected = {
    tests: [
      {
        stats: {

        },
        result: 'hello',
      },
      {
        stats: {

        },
        result: 'hello',
      },
      {
        stats: {

        },
        result: 'hello',
      },
    ],
    stats: {
      time: ''
    },
  }

  expect(actual).toEqual(expected)
})

test('', () => {
  const actual = experiment({
    n: 100,
    run: () => selfAvoidingWalk({
      m: 100, n: 100,
    }).path()
  })

  actual
})


import selfAvodingWalk, { randomPoint } from './self-avoiding-walk'

test('return random point', () => {
  const arr = [1, 2, 3, 4, 5]
  const actual = typeof randomPoint(arr)
  const expected = 'number'

  expect(actual).toEqual(expected)
})

test('make a move', () => {
  const m = 5
  const n = 5
  const x = 2
  const y = 2
  const actual = selfAvodingWalk({
    m, n,
  }).move([x, y]).move([3, 2]).move([3, 3]).move([3, 4]).grid()
  const expected = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, true, true, true],
    [false, false, false, false, false],
  ]

  expect(actual).toEqual(expected)
})

test('return free neighbours', () => {
  const m = 5
  const n = 5
  const x = 2
  const y = 2
  const actual = selfAvodingWalk({
    m, n,
  }).move([x, y]).move([3, 2]).move([3, 3]).move([3, 4]).freeNeighboursCoords([2, 3])
  const expected = [
    [1, 3],
    [2, 4],
  ]

  expect(actual).toEqual(expected)
})

test('return random path', () => {
  const m = 5
  const n = 5
  const actual = selfAvodingWalk({
    m, n,
  }).path()

  expect(typeof actual).toEqual('object')
  expect(Array.isArray(actual.data)).toEqual(true)
  expect(typeof actual.successful).toEqual('boolean')
})

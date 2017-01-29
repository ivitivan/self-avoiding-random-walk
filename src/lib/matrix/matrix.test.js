import matrix from './matrix'

test('create two dimensional array', () => {
  const m = 5
  const n = 5
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).getData()
  const expected = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]

  expect(actual).toEqual(expected)
})

test('return given point', () => {
  const x = 3
  const y = 4
  const m = 5
  const n = 5
  const fill = {}
  const actual = matrix({
    m, n, fill,
  }).getPoint([x, y])
  const expected = fill

  expect(actual).toEqual(expected)
})

test('set point value', () => {
  const x = 3
  const y = 3
  const m = 5
  const n = 5
  const fill = false
  const value = true
  const actual = matrix({
    m, n, fill,
  }).setPoint([x, y], value).getData()
  const expected = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, true, false],
    [false, false, false, false, false],
  ]

  expect(actual).toEqual(expected)
})

test('return center point', () => {
  const m = 5
  const n = 5
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).center()
  const expected = [2, 2]

  expect(actual).toEqual(expected)
})

test('return null if no data', () => {
  const m = 0
  const n = 0
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).center()
  const expected = null

  expect(actual).toEqual(expected)
})

test('return center for even matrix', () => {
  const m = 4
  const n = 4
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).center()
  const expected = [2, 2]

  expect(actual).toEqual(expected)
})

test('return north coords', () => {
  const m = 5
  const n = 5
  const x = 1
  const y = 2
  const value = true
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).setPoint([x, y], value).northCoords([2, 2])
  const expected = [x, y]

  expect(actual).toEqual(expected)
})

test('return east coords', () => {
  const m = 5
  const n = 5
  const x = 2
  const y = 3
  const value = true
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).setPoint([x, y], value).eastCoords([2, 2])
  const expected = [x, y]

  expect(actual).toEqual(expected)
})

test('return south coords', () => {
  const m = 5
  const n = 5
  const x = 3
  const y = 2
  const value = true
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).setPoint([x, y], value).southCoords([2, 2])
  const expected = [x, y]

  expect(actual).toEqual(expected)
})

test('return west coords', () => {
  const m = 5
  const n = 5
  const x = 2
  const y = 1
  const value = true
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).setPoint([x, y], value).westCoords([2, 2])
  const expected = [x, y]

  expect(actual).toEqual(expected)
})

test('return north point', () => {
  const m = 5
  const n = 5
  const x = 1
  const y = 2
  const value = true
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).setPoint([x, y], value).north([2, 2])
  const expected = true

  expect(actual).toEqual(expected)
})

test('return east point', () => {
  const m = 5
  const n = 5
  const x = 2
  const y = 3
  const value = true
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).setPoint([x, y], value).east([2, 2])
  const expected = true

  expect(actual).toEqual(expected)
})

test('return south point', () => {
  const m = 5
  const n = 5
  const x = 3
  const y = 2
  const value = true
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).setPoint([x, y], value).south([2, 2])
  const expected = true

  expect(actual).toEqual(expected)
})

test('return west point', () => {
  const m = 5
  const n = 5
  const x = 2
  const y = 1
  const value = true
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).setPoint([x, y], value).west([2, 2])
  const expected = true

  expect(actual).toEqual(expected)
})

test('point out of matrix', () => {
  const m = 5
  const n = 5
  const x = -1
  const y = 0
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).outOfMatrix([x, y])
  const expected = true

  expect(actual).toEqual(expected)
})

test('point in the matrix', () => {
  const m = 5
  const n = 5
  const x = 1
  const y = 0
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).outOfMatrix([x, y])
  const expected = false

  expect(actual).toEqual(expected)
})

test('point on border', () => {
  const m = 5
  const n = 5
  const x = 1
  const y = 0
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).onBorder([x, y])
  const expected = true

  expect(actual).toEqual(expected)
})

test('point is not on border', () => {
  const m = 5
  const n = 5
  const x = 1
  const y = 1
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).onBorder([x, y])
  const expected = false

  expect(actual).toEqual(expected)
})

test('return close neighbours', () => {
  const m = 5
  const n = 5
  const x = 2
  const y = 2
  const fill = false
  const actual = matrix({
    m, n, fill,
  }).closeNeighbours([x, y])
  const expected = [ [ 1, 2 ], [ 2, 3 ], [ 3, 2 ], [ 2, 1 ] ]

  expect(actual).toEqual(expected)
})

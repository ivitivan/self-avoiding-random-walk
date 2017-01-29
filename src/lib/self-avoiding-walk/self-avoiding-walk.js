import matrix from '../matrix/matrix'
import R from 'ramda'

function constructor(state) {
  const statedMethods = R.map(i => i(state), methods)

  return {
    ...statedMethods,
  }
}

export function randomPoint(arr) {
  const randomIndex = parseInt(Math.random() * arr.length)

  return arr[randomIndex]
}

function move(state) {
  return (point) => {
    state.grid.setPoint(point, true)

    return constructor(state)
  }
}

function grid(state) {
  return () => {
    return state.grid.getData()
  }
}

function freeNeighboursCoords(state) {
  return (point) => {
    const neighbours = state.grid.closeNeighbours(point)
    const freeNeighbours = neighbours.filter(neighbour => {
      return !state.grid.getPoint(neighbour)
    })

    return freeNeighbours
  }
}

function path(state) {
  return () => {
    const moves = []

    let currentPoint = state.grid.center()

    state.grid.setPoint(currentPoint, true)
    moves.push(currentPoint)

    let wayToGo = true
    while (wayToGo) {
      const closeFreeNeighbours = freeNeighboursCoords(state)(currentPoint)

      if (closeFreeNeighbours.length > 0 && !state.grid.onBorder(currentPoint)) {
        currentPoint = randomPoint(closeFreeNeighbours)
        state.grid.setPoint(currentPoint, true)
        moves.push(currentPoint)
      } else {
        wayToGo = false
      }
    }
    const successful = state.grid.onBorder(currentPoint)

    return {
      data: moves,
      successful,
    }
  }
}

const methods = {
  freeNeighboursCoords,
  move,
  grid,
  path,
}

const selfAvodingWalk = ({
  m,
  n,
}) => {
  const fill = false
  const state = {
    grid: matrix({
      m, n, fill,
    })
  }

  return constructor(state)
}

export default selfAvodingWalk


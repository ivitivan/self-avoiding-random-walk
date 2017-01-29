import R from 'ramda'

function constructor(state) {
  const statedMethods = R.map(i => i(state), methods)

  return {
    ...statedMethods,
  }
}

function getPoint(state) {
  return (point) => {
    const [x, y] = point

    return state.data[x][y]
  }
}

function setPoint(state) {
  return (point, value) => {
    const [x, y] = point

    state.data[x][y] = value

    return constructor(state, methods)
  }
}

function getData(state) {
  return () => {
    return state.data
  }
}

function center(state) {
  return () => {
    if (state.data.length === 0) return null

    const countRows = state.data.length
    const countCols = countRows === 0 ? 0 : state.data[0].length
    const rowsCenter = parseInt(countRows / 2)
    const colsCenter = parseInt(countCols / 2)

    return [rowsCenter, colsCenter]
  }
}

function northCoords() {
  return (point) => {
    const [x, y] = point

    return [x - 1, y]
  }
}

function eastCoords() {
  return (point) => {
    const [x, y] = point

    return [x, y + 1]
  }
}

function southCoords() {
  return (point) => {
    const [x, y] = point

    return [x + 1, y]
  }
}

function westCoords() {
  return (point) => {
    const [x, y] = point

    return [x, y - 1]
  }
}

function north(state) {
  return (point) => {
    const northPoint = northCoords(state)(point)

    return getPoint(state)(northPoint)
  }
}

function east(state) {
  return (point) => {
    const [x, y] = point
    const newPoint = [x, y + 1]

    return getPoint(state)(newPoint)
  }
}

function south(state) {
  return (point) => {
    const newPoint = southCoords(state)(point)

    return getPoint(state)(newPoint)
  }
}

function west(state) {
  return (point) => {
    const newPoint = westCoords(state)(point)

    return getPoint(state)(newPoint)
  }
}

//const northEast = (point) => [point[0] - 1, point[1] - 1]
//const southEast = (point) => [point[0] + 1, point[1] + 1]
//const southWest = (point) => [point[0] + 1, point[1] - 1]
//const northWest = (point) => [point[0] - 1, point[1] - 1]

function outOfMatrix(state) {
  return (point) => {
    const [x, y] = point
    const topRow = x < 0
    const leftCol = y < 0
    const bottomRow = x > state.data.length - 1
    const rightCol = state.data.length > 0 && y > state.data[0].length - 1

    if (topRow || leftCol || bottomRow || rightCol) return true
    else return false
  }
}

function onBorder(state) {
  return (point) => {
    const [x, y] = point
    const topRow = x === 0
    const leftCol = y === 0
    const bottomRow = x === state.data.length - 1
    const rightCol = state.data.length > 0 && y === state.data[0].length - 1

    if (topRow || leftCol || bottomRow || rightCol) return true
    else return false
  }
}

function closeNeighbours(state) {
  return (point) => {
    const ways = {
      northCoords,
      eastCoords,
      southCoords,
      westCoords,
    }

    let result = []

    Object.keys(ways).forEach(way => {
      const neighbourPoint = ways[way](state)(point)

      if (outOfMatrix(state)(neighbourPoint)) return

      result.push(neighbourPoint)
    })

    return result
  }
}

let methods = {
  setPoint,
  getPoint,
  getData,
  center,
  northCoords,
  eastCoords,
  southCoords,
  westCoords,
  north,
  east,
  south,
  west,
  outOfMatrix,
  onBorder,
  closeNeighbours,
}

const matrix = ({m, n, fill}) => {
  let theMatrix = []

  for (let row = 0; row < m; row++) {
    theMatrix.push([])
    for (let col = 0; col < n; col++) {
      theMatrix[row][col] = fill
    }
  }

  let state = {
    data: theMatrix,
  }

  return constructor(state, methods)
}

export default matrix


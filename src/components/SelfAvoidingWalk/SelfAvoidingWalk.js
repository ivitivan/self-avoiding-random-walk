import React, {Component} from 'react'
import './SelfAvoidingWalk.css'

function getCrossCoordinates(m, n) {
  const arr = []
  const colWidth = 100 / n
  const rowHeight = colWidth

  for (let row = 0; row < m; row++) {
    arr.push([])
    for (let col = 0; col < n; col++) {
      arr[row][col] = [rowHeight / 2 + (rowHeight * row), colWidth / 2 + (colWidth * col)]
    }
  }

  return arr
}

function svgPath(path, crossCoordinates) {
  const pathStr = path.reduce((m, i, index) => {
    let cmd = 'M'

    if (index !== 0) {
      cmd = 'L'
    }
    const [row, col] = crossCoordinates[i[0]][i[1]]

    m += `${cmd}${col} ${row} `

    return m
  }, '')

  return pathStr
}

export class SelfAvoiding extends Component {
  render() {
    const { m, n, path } = this.props
    const colWidth = 100 / n
    const rowHeight = colWidth
    const patternCenter = colWidth / 2
    const crossCoords = getCrossCoordinates(m, n)
    const pathStr = svgPath(path, crossCoords)
    const rectWidth = 100 / n * m

    return <div className="self-avoiding-walk">
      <svg width="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox={`0 0 100 ${rectWidth}`} preserveAspectRatio="none">
        <defs>
          <pattern id="Pattern" width={colWidth} height={rowHeight} patternUnits="userSpaceOnUse">
            <line x1="0" y1={patternCenter} x2={colWidth} y2={patternCenter} strokeWidth=".2" stroke="black"/>
            <line x1={patternCenter} y1="0" x2={patternCenter} y2={colWidth} strokeWidth=".2" stroke="black"/>
          </pattern>
        </defs>

        <rect fill="white" width="100%" height="100%"/>
        <rect fill="url(#Pattern)" stroke="black" x="0" y="0" width="100%" height="100%"/>

        <path className="walk" d={pathStr} stroke="red" strokeWidth="1" fill="transparent" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  }
}


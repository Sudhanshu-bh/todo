import React from 'react'
import './Board.scss'

function Board({ id, title, ...props }) {
  return (
    <div
      id={id}
      className={`board ${props.className}`}
    >
      <h3>{title}</h3>
      {props.children}
    </div>
  )
}

export default Board

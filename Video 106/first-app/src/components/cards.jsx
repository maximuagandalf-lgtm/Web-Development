import React from 'react'
import "./cards.css"


const Cards = (props) => {
  return (
    <div className="card">
        <img src="https://pngtree.com/freebackground/computer-of-a-programmer-with-lines-code-of-software_15533605.html" alt=""/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Cards

import React from 'react'

function Bagel(props) {


  return (
  <li>
    <h3>{props.type}</h3>
    <p>{props.rating}</p>
    <button onClick={() => props.deleteBagel(props.bagel)}>delete</button>
  </li>
  )
}

export default Bagel
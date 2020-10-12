import React from 'react'
import Bagel from './Bagel'

function BagelsContainer(props) {

  const bagel = props.bagels.map(bagel => <Bagel 
    bagel={bagel}
    key={bagel.id} 
    type={bagel.type} 
    rating={bagel.rating}
    deleteBagel={props.deleteBagel}
    />)
  
  return (
    <>
      <h3>This is the bagels container</h3>
      <div>
        {bagel}
      </div>
    </>
  )
}

export default BagelsContainer
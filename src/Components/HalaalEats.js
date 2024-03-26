import React from 'react'
import restaurants from './restaurants.json'
import Fetcheddata from './Fetcheddata';

const HalaalEats = () => {
  return (
    <div>
      <Fetcheddata data={restaurants}/>
    </div>
    
  )
}

export default HalaalEats
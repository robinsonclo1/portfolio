import React, { useState }  from 'react'
import Hex from "./Hex";

function HexRow() {
  return(
    <div className="hex-row">
      <Hex size={'hex-xs'}/>
      <Hex size={'hex-sm'}/>
    </div>
    
  )
}

export default HexRow
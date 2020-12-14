import React, { useState }  from 'react'
import './Hex.scss'

function Hex(props) {
  const [hovered, setHovered] = useState(false)
  const toggleHover = () => setHovered(!hovered)
  const size = props.size
  const hexClass = hovered ? "hex-lg" :  size
  
  return(
    
    <div className={hexClass} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
    </div>
  )
}

export default Hex
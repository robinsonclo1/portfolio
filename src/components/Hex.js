import React, { useState }  from 'react'
import './Hex.scss'

class Hex extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      hovered: false,
      size: props.size
    }
  }
  
  toggleHover = () => {
    this.setState({
      hovered: !this.state.hovered
    })
  }
  
  render() {
    return (
    
      <div className={this.state.hovered ? "hex-lg" :  this.state.size} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
      </div>
    )
  }
}

export default Hex
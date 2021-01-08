import React from 'react'
import './Hex.scss'

class Hex extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      hovered: false
    }
  }
  
  setSize() {
    if (this.props.inverted ===( this.props.id % 2 === 0)) {
      return "hex-md"
    } else {
      return "hex-sm"
    }
  }
  
  handleChange() {
    const size = this.setSize()
    this.props.setActiveHex(size);
    this.setState({
      hovered: !this.state.hovered
    })
  }
  
  render() {
    const size = this.setSize()
    return (
      <div className={this.state.hovered ? 'hex-lg' :  size} onMouseEnter={this.handleChange} onMouseLeave={this.handleChange}>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Hex
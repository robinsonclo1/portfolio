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
  

  handleChange() {
    this.props.setActiveHex(this.props.size);
    this.setState({
      hovered: !this.state.hovered
    })
  }
  
  render() {
    return (
      <div className={this.state.hovered ? 'hex-lg' :  this.props.size} onMouseOver={this.handleChange} onMouseLeave={this.handleChange}>
      </div>
    )
  }
}

export default Hex
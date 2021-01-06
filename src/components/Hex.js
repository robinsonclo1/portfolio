import React from 'react'
import './Hex.scss'

class Hex extends React.Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      hovered: false,
      size: props.size
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
      <div className={this.state.hovered ? "hex-lg" :  this.state.size} onMouseOver={this.handleChange} onMouseLeave={this.handleChange}>
      </div>
    )
  }
}

export default Hex
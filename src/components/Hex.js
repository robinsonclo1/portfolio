import React from 'react'
import './Hex.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair, faDice, faMicrophoneAlt, faToolbox, faAddressCard } from '@fortawesome/free-solid-svg-icons'

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
        <p>{this.props.item.fontAwesomeIcon}</p>
        <FontAwesomeIcon icon={this.props.item.fontAwesomeIcon} />
      </div>
    )
  }
}

export default Hex

// Accessible faWheelchair
// Teacher/Speaker faMicrophoneAlt
// Adaptable faToolbox
// Hobbies faDice
// Contact Me faAddressCard
//

//other fun ones:
// brain
// battery full
// code / codebranch / cloud
// fileUpload / folderPlus

// json structure
// row
//   column
//     title
//     fontAwesomeIcon
//     exec summary
//     full summary
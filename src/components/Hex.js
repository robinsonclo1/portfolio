import React from 'react'
import './Hex.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair, faDice, faMicrophoneAlt, faToolbox, faAddressCard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Hex extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      hovered: false
    }
  }
  
  setSize() {
    if (!this.props.inverted ===( this.props.id % 2 === 0)) {
      return "hex-md"
    } else {
      return "hex-sm"
    }
  }
  
  setIcon() {
    switch(this.props.item.fontAwesomeIcon) {
      case "faAddressCard":
        return <FontAwesomeIcon icon={faAddressCard} />
      case "faDice":
        return <FontAwesomeIcon icon={faDice} />
      case "faWheelchair":
        return <FontAwesomeIcon icon={faWheelchair} />
      case "faMicrophoneAlt":
        return <FontAwesomeIcon icon={faMicrophoneAlt} />
      case "faToolbox":
        return <FontAwesomeIcon icon={faToolbox} />
      case "faCogs":
        return <FontAwesomeIcon icon={faCogs} />
      case "faGithub":
        return <FontAwesomeIcon icon={faGithub} />
      default:
        return <FontAwesomeIcon icon={faCogs} />
    }
  }
  
  handleChange(e) {
    e.preventDefault()
    const size = this.setSize()
    this.props.setActiveHex(size)
    this.setState({
      hovered: !this.state.hovered
    })
  }
  
  toggleModal(props, icon) {
    this.props.toggleModal(props, icon)
    this.setState({
      hovered: false
    })
  }
  
  render() {
    const size = this.setSize()
    const icon = this.setIcon()
    return (
      <div className={this.state.hovered ? 'hex-lg' :  size}
           onMouseEnter={this.handleChange} onMouseLeave={this.handleChange}
           onClick={this.handleChange} tabIndex="0">
        <div className='hex-interior'>
          {icon}
          {this.state.hovered &&
            <button
              onClick={() => this.toggleModal(this.props.item, icon)}
              className="modal-toggle"
            >{this.props.item.title}</button>
          }
        </div>
      </div>
    )
  }
}

export default Hex

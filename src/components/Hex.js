import React  from 'react'
import './Hex.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair, faDice, faMicrophoneAlt, faToolbox, faAddressCard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Hex extends React.Component {
  constructor() {
    super()
    this.handleHover = this.handleHover.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.state = {
      hovered: false,
      focused: false
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
  
  setActiveHex(e) {
    e.preventDefault()
    this.props.setActiveHex(this.props.item)
    const size = this.setSize()
    this.props.setSize(size)
  }
  
  setSize() {
    if ((this.state.hovered || this.state.focused) &&
      this.props.activeItem &&
      (this.props.activeItem.title === this.props.item.title)) {
      return 'hex-lg'
    } else if (!this.props.inverted === (this.props.id % 2 === 0)) {
      return 'hex-md'
    } else {
      return 'hex-sm'
    }
  }
  
  handleHover(e) {
    this.setActiveHex(e)
    this.setState({
      hovered: !this.state.hovered
    })
  }
  
  handleFocus(e) {
    this.setActiveHex(e)
    this.setState({
      focused: true
    })
  }
  
  handleBlur(e) {
    e.preventDefault()
    this.setState({
      focused: false
    })
  }
  
  toggleModal(props, icon) {
    this.props.toggleModal(props, icon)
    this.setState({
      hovered: false,
      focused: false
    })
  }
  
  render() {
    const size = this.setSize()
    const icon = this.setIcon()
  
    return (
      <div className={size}
           onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
           onClick={this.handleHover} onFocus={this.handleFocus} tabIndex="0">
        <div className='hex-interior'>
          {icon}
          {size === 'hex-lg' &&
            <button
              onClick={() => this.toggleModal(this.props.item, icon)}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              className="modal-toggle"
            >{this.props.item.title}</button>
          }
        </div>
      </div>
    )
  }
}

export default Hex

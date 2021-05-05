import React  from 'react'
import './Hex.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faChess, faGraduationCap, faToolbox, faAddressCard, faCogs } from '@fortawesome/free-solid-svg-icons'
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
        return <FontAwesomeIcon icon={faAddressCard} aria-label="Address Card"/>
      case "faChess":
        return <FontAwesomeIcon icon={faChess} aria-label="Chess King and rook"/>
      case "faChalkboardTeacher":
        return <FontAwesomeIcon icon={faChalkboardTeacher} aria-label="Teaching in front of chalkboard"/>
      case "faGraduationCap":
        return <FontAwesomeIcon icon={faGraduationCap} aria-label="Graduation Cap"/>
      case "faToolbox":
        return <FontAwesomeIcon icon={faToolbox} aria-label="A closed toolbox"/>
      case "faCogs":
        return <FontAwesomeIcon icon={faCogs} aria-label="Three meshed together cogs"/>
      case "faGithub":
        return <FontAwesomeIcon icon={faGithub} aria-label="Github logo"/>
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
    const hexLabel = "Hex " + this.props.id + " of 6. " + this.props.item.title
    const buttonLabel = "Open " + this.props.item.title + " modal"
    const hexId = "btn-modal-" + this.props.item.title

    return (
      <div className={size} id={hexId}
           onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
           onClick={this.handleHover} onFocus={this.handleFocus}
           tabIndex={this.props.showModal ? "-1" : "0"} aria-label={hexLabel}>
        <div className='hex-interior'>
          {icon}
          {size === 'hex-lg' &&
            <button
              onClick={() => this.toggleModal(this.props.item, icon)}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              className="modal-toggle"
              aria-label={buttonLabel}
            >{this.props.item.title}</button>
          }
        </div>
      </div>
    )
  }
}

export default Hex

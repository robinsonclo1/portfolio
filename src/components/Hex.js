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

  handleChange() {
    this.props.setActiveHex(this.props.size);
    this.setState({
      hovered: !this.state.hovered
    })
  }
  
  render() {
    return (
      <div className={this.state.hovered ? 'hex-lg' :  this.props.size} onMouseEnter={this.handleChange} onMouseLeave={this.handleChange}>
        <div className={'hex-interior'}>
          {/*<FontAwesomeIcon icon={faWheelchair}/>*/}
          {/*{this.state.hovered &&*/}
          {/*  <>*/}
          {/*    <button>Hello There!</button>*/}
          {/*  </>*/}
          {/*}*/}
        </div>
        {/*<FontAwesomeIcon icon={faWheelchair} />*/}
        {/*<FontAwesomeIcon icon={faDice} />*/}
        {/*<FontAwesomeIcon icon={faMicrophoneAlt} />*/}
        {/*<FontAwesomeIcon icon={faToolbox} />*/}
        {/*<FontAwesomeIcon icon={faAddressCard} />*/}
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
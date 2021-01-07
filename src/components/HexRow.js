import React  from 'react'
import Hex from './Hex';

class HexRow extends React.Component {
  constructor(props) {
    super()
  }
  
  render() {
    return (
      <div className={this.props.inverted ? 'hex-row inverted' : 'hex-row'}>
        <Hex size={this.props.inverted ? 'hex-md' : 'hex-sm'} setActiveHex={this.props.setActiveHex}/>
        <Hex size={this.props.inverted ? 'hex-sm' : 'hex-md'} setActiveHex={this.props.setActiveHex}/>
      </div>
    )
  }
}

export default HexRow

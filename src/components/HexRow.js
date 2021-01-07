import React  from 'react'
import Hex from './Hex';

class HexRow extends React.Component {
  constructor(props) {
    super()
  }
  
  render() {
    return (
      <div className={this.props.inverted ? 'hex-row inverted' : 'hex-row'}>
        {this.props.inverted &&
          <>
            <Hex size={'hex-sm'} setActiveHex={this.props.setActiveHex}/>
            <Hex size={'hex-md'} setActiveHex={this.props.setActiveHex}/>
          </>
        }
        {!this.props.inverted &&
          <>
            <Hex size={'hex-md'} setActiveHex={this.props.setActiveHex}/>
            <Hex size={'hex-sm'} setActiveHex={this.props.setActiveHex}/>
          </>
        }
      </div>
    )
  }
}

export default HexRow

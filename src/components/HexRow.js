import React  from 'react'
import Hex from './Hex';

class HexRow extends React.Component {
  constructor(props) {
    super()
  }
  
  render() {
    const hex = this.props.column.map(item =>
      <Hex inverted={this.props.inverted} setActiveHex={this.props.setActiveHex} setSize={this.props.setSize} key={item.id} id={item.id}
           item={item} toggleModal={this.props.toggleModal} activeItem={this.props.activeItem}/>)
    
    return (
      <div className={this.props.inverted ? 'hex-row inverted' : 'hex-row'}>
        {hex}
      </div>
    )
  }
}

export default HexRow

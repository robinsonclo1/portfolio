import './App.scss';
import React from 'react'
import HexRow from './components/HexRow'
import hexContent from './hexContent'
import Modal from './components/Modal'
import Hex from "./components/Hex";

class App extends React.Component {
  constructor() {
    super()
    this.toggleModal = this.toggleModal.bind(this)
    this.setActiveHex = this.setActiveHex.bind(this)
    this.setSize = this.setSize.bind(this)
    this.state = {
      inverted: false,
      content: hexContent,
      showModal: false,
      activeInfo: '',
      icon: ''
    }
  }
  
  setActiveHex(item) {
    this.setState({
      activeInfo: item
    })
  }
  
  setSize(size) {
    if (size === 'hex-sm') {
      this.toggleInversion()
    }
  }
  
  toggleModal(item, icon) {
    this.setState({
      showModal: !this.state.showModal,
      activeInfo: item,
      icon: icon
    })
  }
  
  toggleInversion = () => {
    this.setState({
      inverted: !this.state.inverted
    })
  }
  
  render() {
    const hexRow = this.state.content.map((item, i) =>
      <HexRow inverted={i !== 1  ? this.state.inverted : !this.state.inverted}
              setActiveHex={this.setActiveHex} setSize={this.setSize} key={i} column={item.column}
              toggleModal={this.toggleModal} activeItem={this.state.activeInfo} showModal={this.state.showModal}/>)
    
    return (
      <div className='portfolio'>
        <h1>Robin Clower</h1>
        <p>Welcome to my portfolio site!
          <br /> Hover, tab, or click on any of the hexes below to get started.
        </p>
        <div className='hex-wrapper' aria-label="Six hexagons are arranged in a two by three pattern. Each has an icon and a button in the center of the hex">
          {hexRow}
        </div>
        {this.state.showModal &&
          <div className="modal-wrapper">
            <Modal closeModal={this.toggleModal} item={this.state.activeInfo} icon={this.state.icon}/>
          </div>
        }
      </div>
    )
  }
}

export default App

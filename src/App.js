import './App.scss';
import React from 'react'
import HexRow from './components/HexRow'
import hexContent from './hexContent'
import Modal from './components/Modal'

class App extends React.Component {
  constructor() {
    super()
    this.toggleModal = this.toggleModal.bind(this)
    this.setActiveHex = this.setActiveHex.bind(this)
    this.state = {
      inverted: false,
      content: hexContent,
      showModal: false,
      activeInfo: '',
      icon: ''
    }
  }
  
  setActiveHex(size) {
    if (size === 'hex-sm') {
      this.toggleInversion()
    }
  }
  
  toggleModal(item, icon) {
    console.log(item, icon)
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
              setActiveHex={this.setActiveHex} key={i} column={item.column}
              toggleModal={this.toggleModal} />)
    
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Robin Clower</h1>
          <div className='hex-wrapper'>
            {hexRow}
          </div>
        </header>
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

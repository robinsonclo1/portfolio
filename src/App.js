import './App.scss';
import React from 'react'
import HexRow from './components/HexRow'

class App extends React.Component {
  constructor() {
    super()
    this.setActiveHex = this.setActiveHex.bind(this)
    this.state = {
      inverted: false,
      activeHex: ''
    }
  }
  
  setActiveHex(size) {
    this.setState({ activeHex: size });
    if (size === 'hex-sm') {
      this.toggleInversion();
    }
  }
  
  toggleInversion = () => {
    this.setState({
      inverted: !this.state.inverted
    })
  }
  
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Robin Clower</h1>
          <div className='hex-wrapper'>
            <HexRow inverted={this.state.inverted} setActiveHex={this.setActiveHex}/>
            <HexRow inverted={!this.state.inverted} setActiveHex={this.setActiveHex}/>
            <HexRow inverted={this.state.inverted} setActiveHex={this.setActiveHex}/>
          </div>
        </header>
      </div>
    )
  }
}

export default App

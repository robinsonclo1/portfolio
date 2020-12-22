import './App.scss';
import React from 'react'
import HexRow from './components/HexRow'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inverted: false
    }
  }
  
  toggleInversion = () => {
    this.setState(previousState => {
      return {
        inverted: !this.state.inverted
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Robin Clower</h1>
          <button onClick={this.toggleInversion}>{this.state.inverted ? "ON" : "OFF"}</button>
          <div className="hex-wrapper">
            <HexRow inverted={!this.state.inverted}/>
            <HexRow inverted={this.state.inverted}/>
            <HexRow inverted={!this.state.inverted}/>
          </div>
        </header>
      </div>
    )
  }
}

export default App

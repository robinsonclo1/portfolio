import './App.scss';
import React from 'react'
import HexRow from './components/HexRow'
import hexContent from "./hexContent"

class App extends React.Component {
  constructor() {
    super()
    this.setActiveHex = this.setActiveHex.bind(this)
    this.state = {
      inverted: false,
      content: hexContent
    }
  }
  
  setActiveHex(size) {
    if (size === 'hex-sm') {
      this.toggleInversion()
    }
  }
  
  toggleInversion = () => {
    this.setState({
      inverted: !this.state.inverted
    })
  }
  
  render() {
    const hexRow = this.state.content.map((item, i) =>
      <HexRow inverted={i !== 1  ? this.state.inverted : !this.state.inverted} setActiveHex={this.setActiveHex} key={i} column={item.column} />)
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Robin Clower</h1>
          <div className='hex-wrapper'>
            {hexRow}
          </div>
        </header>
      </div>
    )
  }
}

export default App

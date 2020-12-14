import './App.scss';
import Hex from './components/Hex'
import HexRow from './components/HexRow'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robin Clower</h1>
        <div className="hex-wrapper">
          <HexRow />
          <HexRow />
          <HexRow />
        </div>
      </header>
    </div>
  );
}

export default App;

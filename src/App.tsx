import logo from './logo.svg';
import './App.css';
// import { sendViaIOTAFirst } from "./iota-messaging/iota-message-example";
// import { runIOTAWasm } from "./iota-messaging/official-example";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={sendViaIOTAFirst}>Send message</button>
        <button onClick={runIOTAWasm}>Run Wasm IOTA</button> */}
      </header>
    </div>
  );
}

export default App;

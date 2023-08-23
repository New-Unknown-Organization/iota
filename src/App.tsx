import logo from './logo.svg';
import './App.css';
import { createIdentity } from './identity/create';
import { updateIdentity } from './identity/update';
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
        <button onClick={createIdentity}>Create identity</button>
        <button onClick={updateIdentity}>Update identity</button>
        {/* <button onClick={sendViaIOTAFirst}>Send message</button>
        <button onClick={runIOTAWasm}>Run Wasm IOTA</button> */}
      </header>
    </div>
  );
}

export default App;

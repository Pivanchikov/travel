import React from 'react';
import '../assets/scss/App.scss';
import { Button } from 'element-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button>Edit</Button>
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

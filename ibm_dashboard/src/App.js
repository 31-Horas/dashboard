// import logo from './logo.svg';
import React from 'react';

import './App.css';
import './dropzone-style.css';

import DropzoneComponent from './DropzoneComponent';

function App() {
  function handleDrop(file) {
    console.log('File selected:', file);
  }

  return (
    <div className="App">
      <header className="App-header">
        <DropzoneComponent onDrop={handleDrop} />
      </header>

    </div>
  );
}

export default App;

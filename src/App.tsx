import React from 'react'
import Counter from './features/counter/Counter';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg"
          className="Redux-logo"
          alt="logo"
        />
      </header>
      <div className="App-body">
        <Counter />
      </div>
    </div>
  )
}

export default App;

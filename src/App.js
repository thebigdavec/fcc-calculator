import React, { Component } from 'react';
import Display from './display';
import Buttons from './buttons';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <h1>The FCC Calculator</h1>
        <Display />
      <Buttons />
      </div>
      </header>
    </div>
  );
  }
}

export default App;

{/* <Digits />
<Operators />
<Commit /> */}
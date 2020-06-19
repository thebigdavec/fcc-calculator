import React, { Component } from 'react';
import Display from './display';
import Buttons from './buttons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0'
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <h1>The FCC Calculator</h1>
        <Display display={this.state.display}/>
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
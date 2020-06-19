import React, { Component } from 'react';
import Display from './display';
import Buttons from './buttons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      digitButtons: [
        'zero','one','two','three','four','five','six','seven','eight','nine'
      ],
      operatorButtons: [
        {id: 'add', symbol: '+', operator: this.add()},
        {id: 'subtract', symbol: '-', operator: this.subtract()},
        {id: 'multiply', symbol: 'x', operator: this.multiply()},
        {id: 'divide', symbol: '÷', operator: this.divide()}
      ],
      commitButtons: [
        {id: 'equals', symbol: '=', operator: this.calculate()},
        {id: 'clear', symbol: 'C', operator: this.clear()}
      ]
    }
  }

  add() {
    return 'Add';
  }
  subtract() {
    return 'Subtract';
  }
  multiply() {
    return 'Multiply';
  }
  divide() {
    return 'Divide';
  }
  calculate() {
    return 'Calculate';
  }
  clear() {
    return 'Clear';
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
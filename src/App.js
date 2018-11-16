import React, { Component } from 'react';
import './App.css';

import Validation from './comps/Validation.js'
import Char from './comps/Char.js'


class App extends Component {
  state = {
    input: ''
  }

  changeInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  deleteInput = (index) => {
    let text = this.state.input.split('');
    text.splice(index, 1);

    const updatedText = text.join('');

    this.setState({
      input: updatedText
    })
  }

  render() {

    const characters = this.state.input.split('').map((ch, i) => {
      return <Char val={ch} key={i} del={() => this.deleteInput(i)}/>;
    })

    return (
      <div className="App" >
        <h2>react</h2>

        <input 
          type="text" 
          value={this.state.input}
          onChange={this.changeInput}/>

          <p>{this.state.input}</p>

          <Validation inputLength={this.state.input.length} />
          
          {characters}
      </div>
    );
  }
}

export default App;

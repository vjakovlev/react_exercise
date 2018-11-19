import React, { Component } from 'react';
import './App.css';

import Validation from './comps/Validation.js';
import Char from './comps/Char.js';

class App extends Component {
  state = {
    input: ''
  }

  inputHandler = (event) => {
    this.setState({ 
      input: event.target.value 
    })
  }


  deleteHandler = (index) => {
    let text = this.state.input.split('');

    text.splice(index, 1);

    let updatedInput = text.join('');

    this.setState({
      input: updatedInput
    })
  }

  render() {

    let characters = this.state.input.split('').map((ch, i) => {
      return <Char val={ch} key={i} del={() => this.deleteHandler(i)}/>
    })

    return (
      <div className="App" >
        <h2>react</h2>

        <Validation input={this.state.input} />

        <input type="text" onChange={this.inputHandler} value={this.state.input}/>

        <p>{this.state.input.length}</p>
        
        {characters}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customization from './Customization';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className='left'>Left</section>
        <section className='picture'>
          <img src='/dress-1.jpg' />
        </section>
        <Customization />
      </div>
    );
  }
}

export default App;

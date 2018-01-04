import React, { Component } from 'react';
import './Customization.css';

class Customization extends Component {
  constructor(){
    super();
    this.state = {};
  }

  handleCustomizationSelection(customizationOption){
    return () => {
      console.log(customizationOption)
      // TODO: Do something here to open our Size / Height drawer components
    };
  }

  render() {
    return (
      <div className="Customization">
        <h3>Selection Area</h3>
        <ul>
          <li onClick={this.handleCustomizationSelection('size')}>
            <button><span>Dress Size</span><span className='chosen'></span></button>
          </li>
          <li onClick={this.handleCustomizationSelection('height')}>
            <button><span>Height</span><span className='chosen'></span></button>
          </li>
        </ul>

        <div className='btn'>Add to Bag</div>
      </div>
    );
  }
}

export default Customization;

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
      // Do something here to open our size or height components
    };
  }

  render() {
    return (
      <div className="Customization">
        <h3>Specify Your Size</h3>
        <ul>
          <li onClick={this.handleCustomizationSelection('size')}>
            <span>Dress Size</span><span className='chosen'></span>
          </li>
          <li onClick={this.handleCustomizationSelection('height')}>
            <span>Height and Hemline</span><span className='chosen'></span>
          </li>
        </ul>

        <div className='btn'>Add to Bag</div>
      </div>
    );
  }
}

export default Customization;

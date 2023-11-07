import React, { Component } from 'react';
import './style.css';


export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h2>Cart Page</h2>
      </div>
    );
  }
}

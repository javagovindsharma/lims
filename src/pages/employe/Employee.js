import React, { Component } from 'react';
import '../../style.css';


export class Employee extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h2>Employe Page</h2>
      </div>
    );
  }
}

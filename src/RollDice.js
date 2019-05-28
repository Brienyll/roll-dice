import React, { Component } from 'react';


class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
    <div>
      
      <i face='three'></i>
      <button> Roll Dice </button>
    </div>
    );
  }
}

export default RollDice;
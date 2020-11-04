import React, { Component } from 'react';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <div>
        Hello from Messenger
      </div>
    )
  }
}


export default Messenger;
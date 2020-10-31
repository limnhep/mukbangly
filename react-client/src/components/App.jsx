import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
    }
  }

  requestFeeds() {
    axios.get('/getFeeds')
      .then(response => {
        console.log(response)
        this.setState({
          feed: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    requestFeeds()
  }

  render() {
    console.log(this.state.feed);
    return (
      <div>
        Hello From App!
      </div>
    )
  };
};

export default App;
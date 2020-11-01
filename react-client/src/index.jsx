import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import FeedList from './components/feed/FeedList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    }
  }

  requestFeeds() {
    axios.get('/getFeeds')
      .then(response => {
        this.setState({
          feeds: response.data
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  componentDidMount() {
    this.requestFeeds();
  }

  render() {
    return (
      <div>
        {/* <div>
          Nav Bar
        </div>
        <div>
          Story
        </div> */}
        <FeedList restaurants={this.state.feeds} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('live-streaming'));
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
        Hello from React!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('live-streaming'));
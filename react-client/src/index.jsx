import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import FeedList from './components/feed/FeedList.jsx';
import NavBar from './components/search/NavBar.jsx';
import StoryList from './components/story/StoryList.jsx';

const Main = styled.div`
  height: auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    }
    this.searchRestaurant = this.searchRestaurant.bind(this);
  }

  requestFeeds() {
    axios.get('/feeds')
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

  searchRestaurant(search) {
    axios.get('/feed', {
      params: {
        business_name: `${search}`
      }
    })
      .then((response) => {
        this.setState({
          feeds: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Main>
        <NavBar searchRestaurant={this.searchRestaurant} />
        <StoryList restaurants={this.state.feeds} />
        <FeedList restaurants={this.state.feeds} />
      </Main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('live-streaming'));
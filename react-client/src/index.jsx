import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import FeedList from './components/feed/FeedList.jsx';
import NavBar from './components/search/NavBar.jsx';
import StoryList from './components/story/StoryList.jsx';

const Main = styled.div`
  height: auto;
  /* background-color: rgba(var(--b3f,250,250,250),1); */
`;

const MainFlex = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
`;
const MainStatic = styled.img`
  justify-content: center;
  grid-column-start: 2;
  max-width: 1280px;
  justify-self: center;
  cursor: pointer;
`;

const Footer = styled.div`
  z-index: 1000;
  bottom: 0.001px;
  display: flex;
  justify-content: center;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  height: 60px;
  weight: auto;
  border-top: 0.5px solid #e6e6e6;
  background-color: white;
  position: sticky;
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
        <MainFlex>
          <MainStatic src='https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/1.static-image-mvp-2.png' />
        </MainFlex>
        <StoryList restaurants={this.state.feeds} />
        <FeedList restaurants={this.state.feeds} />
        {/* <Footer /> */}
      </Main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('live-streaming'));
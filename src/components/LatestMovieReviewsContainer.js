import React, { Component } from 'react';
import 'isomorphic-fetch';
require('es6-promise').polyfill();

const NYT_API_KEY = 'e4407b9b99bf49dca641270c478891f3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
const review = null

            

class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reviews: []
    };
  }

  fetchNews = () => {
    fetch(URL)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(newsStories) {
        review = newsStories.results
      });
  }

  componentWillMount() {
    this.fetchNews()
    this.setState({
      reviews: review
    })
  }

  render() {
    

    return (
      <div className="latest-movie-reviews"></div>
    );
  }
}

export default LatestMovieReviewsContainer;
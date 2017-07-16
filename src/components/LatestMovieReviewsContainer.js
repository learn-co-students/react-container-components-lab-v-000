import React, { Component } from 'react';
require('es6-promise').polyfill();
import 'isomorphic-fetch';

const NYT_API_KEY = 'e4407b9b99bf49dca641270c478891f3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


            

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
       console.log(response)
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
  }

  componentWillMount() {
    this.fetchNews()
  }

  render() {
    

    return (
      <div className="latest-movie-reviews"></div>
    );
  }
}

export default LatestMovieReviewsContainer;
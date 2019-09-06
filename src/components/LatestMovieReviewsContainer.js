import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const MY_API_KEY = "Xrmcla6YMZijaIMOEF2l3aJaYeFu3uGo";
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${MY_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  }

  render() {
    console.log(URL);
    return <MovieReviews className="latest-movie-reviews" reviews={this.state.reviews} />;
  }
}

export default LatestMovieReviewsContainer;

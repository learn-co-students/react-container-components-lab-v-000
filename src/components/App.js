import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';

const DummyData =
    [
      {title: "Thor", content: "It was good!"},
      {title: "Spider Man", content: "It was not great..."},
      {title: "Captain America", content: "It was okay."},
      {title: "Iron Man", content: "It was AMAZING!"},
      {title: "Hulk", content: "It was super good!!"}
    ]

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class App extends Component {

  constructor() {
    super()
    this.state = {
      word: "",
      reviews: []
    }
  }

  handleClick = () => {
    this.setState({
      reviews: DummyData
    })
    // fetch(URL)
    // .then(response => console.log(response))
    // .then(data => this.setState({reviews: data}))
  }

  searchedMovies = (word) => {
    let array = []
    DummyData.forEach(function (review) {
      if (review.title == word) {
        array.push(review)
      }
    })
    this.setState({
      reviews: array
    })
    // let url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    //             + 'query=' + this.state.word + `api-key=${NYT_API_KEY}`;
    // fetch(url)
    // .then(response => console.log(response))
    // .then(data => this.setState({reviews: data}))
  }

  // showMovies = () => {
  //   return this.state.reviews.map(function (review) {
  //     return <MovieReviews title={review.title} content={review.content}/>
  //   })
  // }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Show Latest Movies</button>
        <SearchableMovieReviewsContainer search={this.searchedMovies}/>
        <LatestMovieReviewsContainer reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;

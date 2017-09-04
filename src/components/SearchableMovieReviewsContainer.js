// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = '28f872e13cd54fb8af6272f519915996';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      movieReviews: [],
      query: "Scary"
    }
  }

  componentWillMount() {
    // fetch away
    debugger;
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.query}`)
      .then(resp => resp.json())
      .then((movieReviews) => {
        console.log(movieReviews.results);
        debugger;
        this.setState({
          movieReviews: movieReviews.results,
        }, ()=>{console.log(this.state.movieReviews)});
      });
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews movieReviews={this.state.movieReviews}/>
      </div>
    );
  }
}

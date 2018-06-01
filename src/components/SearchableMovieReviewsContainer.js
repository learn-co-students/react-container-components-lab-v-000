import React from 'react';
import MovieReviews from './MovieReviews';


const NYT_API_KEY = '3f4036d8e9f04c96aa1c352f5633e2cf';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  onChange(e) {
      this.setState({searchTerm: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getResults()
  }

  getResults(){
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
        })
      .then(data => this.setState({ reviews: data.results, isLoading: false }))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
              <form onSubmit={this.handleSubmit}>
                <h3>Im looking for:</h3>
                <input ref="srch" type="search" id="search" placeholder="Search..." />
                <button>Go</button>
                <hr />
              <MovieReviews reviews={this.state.reviews} />
              </form>
            </div>
          )
  }
}

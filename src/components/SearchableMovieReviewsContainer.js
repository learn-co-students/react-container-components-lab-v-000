import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2405247074ca487e8ea14bcc8e74e010';

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: '',
    }
  }
  
  searchUrl = () => {
    return 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
            + this.state.searchTerm
            + `&api-key=${NYT_API_KEY}`;
  }

  handleSearchTermChange = (event) => {
    this.setState({
      ...this.state,
      searchTerm: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let url = this.searchUrl();
    fetch(url).then(function(data){
      return data.json();
    }).then(function(json) {
      this.setState({
        ...this.state,
        reviews: json.results,
      }, () => console.log(this.state.reviews))
    }.bind(this))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form>
          <div>
            <label>
              Search
              <input 
                name="searchTerm" 
                type="text" 
                value={this.state.searchTerm}
                onChange={this.handleSearchTermChange}  
              />
            </label>
          </div>
          <div>
            <button 
              type="submit"
              onClick={this.handleSubmit}
            >Search</button>
          </div>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
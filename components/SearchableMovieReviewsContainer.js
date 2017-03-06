const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');

const SearchInput = require('./SearchInput');
const MovieReviews = require('./MovieReviews');

const NYT_API_KEY = '12abbc3269fd4a1cb7d2134b4f08b1ae'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            +  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(ev){
    this.setState({ searchTerm: ev.target.value });
  }

  handleSubmit(ev){
    ev.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }


  render() {
    return (
      <div className='searchable-movie-reviews'>
        <SearchInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSearchChange}/>
        <MovieReviews reviews= {this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;

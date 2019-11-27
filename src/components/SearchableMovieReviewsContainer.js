import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component{
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  render() {
    return(
      <section>
        <form onSubmit={e => this.handleSubmit(e)}>
          <searchTerm value={this.state.searchTerm} onChange={e => this.setState({searchTerm: e.target.value})}></searchTerm>
        </form>

        <div className="searchable-movie-reviewss">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </section>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let newUrl = URL + `&query=${this.state.searchTerm}`

    fetch(newUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        reviews: [...data.results]
      })
    })
  }
}

import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY =
'4HSlU471TmqjKcSfsBRSwdu7AW5ae9FZ'
//  'f98593a095b44546bf4073744b540da0';
const URL = 
'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

// 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    const searchUrl = URL + this.state.searchTerm + '&' + 'api-key=' + NYT_API_KEY
    fetch(searchUrl)
      .then(resp=>resp.json())
      .then(json=>this.setState({reviews: json.results}))
    e.preventDefault()
  }
  
  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer
import React from 'react';
import 'whatwg-fetch'
import MovieReviews from './MovieReviews'

var APIURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=d4e40bf6017149eca2e9506a1f5d3975`

"https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=d4e40bf6017149eca2e9506a1f5d3975&&query='28+days+later'"
class SearchableMovieReviewsContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			reviews: [],
      searchTerm: ""
		};
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
	}

  handleSearch(){
    APIURL += `&&query=${this.state.searchTerm.split(" ").join("+")}`
    fetch(APIURL)
    .then(response => {return response.json()})
    .then(response => {return response.results})
    .then(response => {
      this.setState({reviews: response})
    })
  }

  handleChange(event){
    this.setState({
      searchTerm: event.target.value
    })
  }
    

  render(){
    return(
      <div className="searchable-movie-reviews">
        <h1>Please Enter Movie Title To Search For A Review:</h1>
        <input type="text" name="movie-name" value={this.state.searchTerm} onChange={this.handleChange}></input>
        <button onClick={this.handleSearch}>Search</button>
        <div className="search-result">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
      )
  }
}

export default SearchableMovieReviewsContainer;
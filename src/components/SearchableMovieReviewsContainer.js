import React from 'react';
import MovieReviews from './MovieReviews';
require('isomorphic-fetch');

class SearchableMovieReviewsContainer extends React.Component{
    constructor(){
      super();

      this.state = {
          reviews: [],
          searchTerm: ""
      }
    }
    
    fetcReviews = () => {
        const NYTIMEKEY = 'api-key=';
        let query = `&query=${this.state.searchTerm}`;
        let uri = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + NYTIMEKEY + query;
        
        fetch(uri)
        .then(res => res.json())
        .then(json => this.setState({reviews: json.results}))
    }
    
    componentDidUpdate(){
        this.fetcReviews();
    }

    handleFormSubmition = (event) => {
      event.preventDefault();
      this.setState({
          searchTerm: event.target.elements.searchTerm.value
      })
      
    }

    render(){
      return(
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleFormSubmition}>
            <label htmlFor="search">Search:</label>
            <input id="search" name="searchTerm" type="text"></input>
            <input type="submit"></input>
          </form>    
          <MovieReviews reviews={this.state.reviews}/>
        </div>  
      );
    }
}

export default SearchableMovieReviewsContainer;
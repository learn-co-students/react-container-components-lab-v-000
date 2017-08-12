// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

export default class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: '',
    };
  }

  onSearchTermChange = (event)=>{
    this.setState({searchTerm: event.target.value})
  }

  search = ()=>{
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.searchTerm + `&api-key=${NYT_API_KEY}`).then(data=>data.json()).then(data=>{
      this.setState({reviews: data.results});
    });
  }

  render(){
    return (<div className="searchable-movie-reviews">
      <input type="text" onChange={this.onSearchTermChange} />
      <button onClick={this.search}>Search</button>
      <MovieReviews reviews={this.state.reviews}/>
    </div>);
  }
}

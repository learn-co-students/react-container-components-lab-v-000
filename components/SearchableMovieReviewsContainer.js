import React from 'react'; 
import MovieReviews from './MovieReviews'; 
import actions from '../actions'; 

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super(); 
    this.state = { 
      reviews: [],  
      query: '' 
    }; 
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(ev) {
    this.state.query = ev.target.value;  
  }
  handleSubmit(ev) {
    actions.search(this.state.query);  
  }
  
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Submit</button> 
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div> 
        ) 
  }
}

import React from 'react'; 
import MovieReviews from './MovieReviews'; 
import actions from '../actions'; 

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();  
    this.state = {
      reviews: [],
    }
  }

  componentWillMount(){
    var reviews = actions.getAllReviews(); 
    this.setState({
      reviews: reviews,  
    })
  }

  render() {
    return( 
       <div className="latest-movie-reviews">
         <MovieReviews reviews={this.state.reviews} />
       </div>
         )
  }
}

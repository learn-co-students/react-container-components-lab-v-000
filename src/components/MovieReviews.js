// Code MovieReviews Here
import React from 'react'

class MovieReviews extends React.Component{
 	render () {
 	return(
      <div className="review-list">
		{this.props.reviews.map(review => <div class="review">{review.headline}</div>)}
      </div>
    )
  }

};

export default MovieReviews;

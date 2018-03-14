import React from 'react'; // look up why i need to include react here
// Code MovieReviews Here


const MovieReviews = ({reviews}) => {
	return(
		<div className="review-list">
				{reviews.map(review => <p className="review"> {review.display_title} </p>)}
		</div>
	)
}


MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews;

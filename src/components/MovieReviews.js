// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
	return (
		<div className="review-list">
			{reviews.map(generateReview)}
		</div>
	)
}

MovieReviews.defaultProps = {
	reviews: []
}

const generateReview = (review) =>  {
	return (
		<div className="review">
			<h5>{review.display_title}</h5>

		</div>
	)
}

export default MovieReviews;
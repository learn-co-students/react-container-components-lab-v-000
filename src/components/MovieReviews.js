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

const generateReview = (review, i) =>  {

	return (
		<div className="review" key={i}>
			<h5>{review.display_title}</h5>
		</div>
	)
}

export default MovieReviews;
// Code MovieReviews Here

import React from 'react'

const Review = ({review}) => {
	return (
		<div key={review.display_title} className="review">
			{review.display_title}
			{review.byline}
		</div>
	)
}

const MovieReviews = ({reviews}) => {
	return <div className = 'review-list'>
		{reviews.map(review => Review({review}))}
	</div>;
}

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews;
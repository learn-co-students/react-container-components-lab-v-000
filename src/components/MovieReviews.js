import React from 'react';

const MovieReviews = ({ reviews }) => (
	<ol className="review-list">
		{reviews.map(review => <li className="review">{review.display_title}</li>)}
	</ol>
)

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews

// Code MovieReviews Here
import React from 'react';




const MovieReviews = ({reviews}) => (
	<div className="review-list">
		{reviews.map(Review)}
	</div>
);

const Review = ({title}) => {
	return (
		<div className="review">
			<h3>{title}</h3>
		</div>
	)
}

MovieReviews.defaultProps = {
	reviews: []
}


export default MovieReviews
// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => 
		<div className="review-list">
		{reviews.map(
			review => 
			<div>
			<h3>{review.display_title}</h3>
			<h5>{review.byline}</h5>
			<p>{review.summary_short}</p>
			</div>
			)}
		</div>;
	
MovieReviews.defaultProps = {
	reviews: [] 
}


export default MovieReviews
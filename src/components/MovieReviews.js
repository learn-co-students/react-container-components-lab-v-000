// Code MovieReviews Here
import React from 'react'

const Review = ({ title, summary }) => (
	<div className="review">
		<h3>{ title }</h3>
		<p>{ summary }</p>
	</div>
)

const MovieReviews = ({ reviews }) => (
	<div className="review-list">
		{ reviews.map(review => <Review title={review.display_title} summary={review.summary_short} />) }
	</div>
)


export default MovieReviews;
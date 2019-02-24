// Code MovieReviews Here
import React from 'react'

const Review = ({ byline, headline }) => {
	return (
		<div className='review' key={headline}>
			<h2>{headline} - {byline}</h2>
		</div>
	)
}

const MovieReviews = ({ reviews }) => {
	return (
		<div className="review-list">
			{reviews.map(Review)}
		</div>
	)
}

export default MovieReviews
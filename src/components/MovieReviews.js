import React from 'react'

const MovieReviews = (props) => {
	const generateReviews = () => {
		return props.reviews.map(review => <div className="review"><h2>{review.headline}</h2><p>{review.summary_short}</p><p><a href={review.link.url}>{review.link.url}</a></p></div>)
	}

	return (
		<div className="review-list">
			{generateReviews()}
		</div>
		)
}

export default MovieReviews

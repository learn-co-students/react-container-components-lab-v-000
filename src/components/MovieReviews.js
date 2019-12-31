import React from 'react';

const MovieReviews = ({reviews}) => {
	return (
		<div className="review-list">
			{reviews.map((review, idx) => {
				return (
					<div className="review" key={idx}>
						<h1>{review.display_title}</h1>
						<h3>Opening Date: {review.opening_date}</h3>
						<h2>{review.headline}</h2>
						<p>{review.summary_short}</p>
						<a href={review.link.url}>{review.link.suggested_link_text}</a>
					</div>)
			})}
		</div>
	)
}

export default MovieReviews
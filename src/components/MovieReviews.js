// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

	return (
		<ul class='review-list'>
			{props.reviews.map(review => (
				<i class='review'>
					<h3>{review.headline}</h3>
				</i>
			))}
		</ul>
	)
}

 export default MovieReviews
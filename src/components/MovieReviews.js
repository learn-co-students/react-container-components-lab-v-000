// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
	return (
		<div className='review-list'>

			{ props.reviews.map( (movie, i) => {
				return <div className='review' key={i}>Title: {movie.title} Author: {movie.author}</div>
				})
			}
		</div>
		)
}

export default MovieReviews
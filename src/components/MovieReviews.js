import React from 'react';


// Code MovieReviews Here
// This is the presentational component

const MovieReviews = ({reviews}) => {
		return(
		<div>
		  <p>This is a MovieReviews component:</p>
		  {reviews.map((movie) => <p>{movie.display_title}</p>)}
		</div>
		)
}

export default MovieReviews
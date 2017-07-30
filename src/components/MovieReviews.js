import React from 'react';


// Code MovieReviews Here
// This is the presentational component

const MovieReviews = (props) => {

			  // remember to give key to .map 
			  console.log("props in MovieReviews:", props)
		return(
		<div className="review-list">
		  {props.reviews ? props.reviews.map(review => <p className="review">{review.display_title}</p>): "loading..."}
		</div>
		)
}

		MovieReviews.defaultProps = {
			reviews: []
		}

export default MovieReviews
import React from 'react';


// Code MovieReviews Here
// This is the presentational component

const MovieReviews = (props) => {


			  // remember to give key to .map 
			  console.log("props in MovieReviews:", props)
		return(
		<div className="review">
		  {props.reviews ? props.reviews.map(review => <p>{review.display_title}</p>): "loading..."}
		</div>
		)
}


export default MovieReviews
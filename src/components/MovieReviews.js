import React from 'react'

const MovieReviews = ({reviews}) => {

	const reviewList = reviews.map((r, index) => <li className="review" key={index}><a href={r.link.url} target="_blank">{r.link.suggested_link_text}</a></li>)	

	return (
	   	<div className="review-list"> 
	   		<h3>Reviews</h3>
	   		{reviewList}		
	  	</div>
	)	
}

export default MovieReviews

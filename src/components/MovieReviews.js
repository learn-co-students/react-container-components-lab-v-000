import React from 'react'
export default function MovieReview(props) { 
	return (
		<div className="review-list">
		{props.reviews.map((movie) => {
		return (<div className="review"><h1>{movie.display_title}</h1></div>)
	    })}
	    </div>)
}
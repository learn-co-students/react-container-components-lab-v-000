import React from 'react'

const MovieReviews = ({reviews}) => 
	<div className='review-list'>
		<ul>
		    {reviews.map((r, i) => (
		      <li className="review" key={i}>{r.display_title}</li>
		    ))}
		</ul>
	</div>



export default MovieReviews
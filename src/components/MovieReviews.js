// Code MovieReviews Here
import React from 'react'
 
const displayReviews = reviews => {
	return reviews.reviews.map((el, idx) => {
		return (
			<li className="review"><h2>{el.headline}</h2></li>
		)
	} )

}

const MovieReviews = reviews => {
	return (
    <ul className="review-list">
			{displayReviews(reviews)}
		</ul>
  )
}
 
export default MovieReviews


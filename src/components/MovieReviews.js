// Code MovieReviews Here
import React from 'react'
//class MovieReviews extends React.Component{
	// getReviews = (reviews) => {
	// 	return reviews.map(review => <div className="review">{review.display_title}</div>)
	// }
const MovieReviews = ({reviews}) => {
	return(
		<div className="review-list">
				{reviews.map(review => <div className="review">{review.display_title}</div>)}
		</div>
	)
}
//}

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews
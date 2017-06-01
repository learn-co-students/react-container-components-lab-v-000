import React from 'react'
const MovieReviews = ({reviews}) => {
	return(
	<div className="review-list">
		{reviews.map((review) => 
				<div className="review">
				  <h2>{review.display_title}</h2>
          <img src={review.multimedia.src} />
          <p>{review.summary_short}</p>
				</div>
			)}
	</div>
	)
	}

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews;
import React from 'react'

const Review = ({display_title, summary_short})=> {
	return (
		<li className="review"><b>{display_title}</b><br/>{summary_short}</li>
	)
}

const MovieReviews = reviews=> {
  return (
    <ul className="review-list">
      {reviews.map(review=> <Review display_title={review.display_title} summary_short={review.summary_short} /> )}
    </ul>
  )
}

export default MovieReviews
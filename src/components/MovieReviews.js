import React from 'react'

const MovieReviews = ({reviews})=> {
  return (
    <ul className="review-list">
      {reviews.map((review, i)=> <li className="review"><b>{review.display_title}</b><br/>{review.summary_short}</li> )}
    </ul>
  )
}

MovieReviews.defaultProps = {
	reviews: [{display_title: 'Something went wrong', summary_short: 'No reviews have been supplied by the server'}]
}

export default MovieReviews
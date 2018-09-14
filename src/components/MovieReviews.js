import React from 'react'

const renderMovieReview = (reviews) => {
  return reviews.map((review, idx)=> {
    return (
      <div className="review" key={idx}>
        <h2>{review.display_title}</h2>
        <p>{review.summary_short}</p>
        <p><small><a href={review.link.url}>Read Review</a></small></p>
        <img alt=" " src={review.multimedia.src} />
      </div>
    )
  })
}

const MovieReviews = ({reviews}) => (
  
  <div className="review-list">
    {renderMovieReview(reviews)}
  </div>
)

export default MovieReviews
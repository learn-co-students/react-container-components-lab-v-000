import React from 'react'

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => { return (
        <div className="review" key={review.display_title}>
          <img src={review.multimedia.src} alt={review.display_title}/>
          <h1 className="headline">{review.headline}</h1>
          <p className="summary">{review.summary_short}</p>
          <p><a href={review.link.url}>{review.link.suggested_link_text}</a></p>
        </div>
        )}
      )}
    </div>
  )
}

export default MovieReviews

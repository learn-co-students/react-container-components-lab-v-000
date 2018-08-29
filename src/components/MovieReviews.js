// Code MovieReviews Here
import React from 'react'

const renderReview = ({ headline, byline, link, summary_short }) => {
    return (
      <div key={headline} className="review">
        <h3>
          <a className="review-link" href={link.url}>{headline}</a>
        </h3> 
        <p>{summary_short}</p>
      </div>
    )
  }

const MovieReviews = props => {
    return (
        <div className="review-list">
            {props.reviews.map(renderReview)}
        </div>
    )
}

export default MovieReviews
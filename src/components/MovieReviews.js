import React from 'react'

const Review = ({
  headline, summary_short, link, display_title
}) => (
  <div key={ headline } className="review">
    <p><strong>{ headline }</strong></p>
    <a href={ link.url }>{ display_title }</a>
    <p>{ summary_short }</p>
  </div>
)

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(Review) }
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews

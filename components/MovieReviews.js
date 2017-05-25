'use strict'

import React from 'react'

const MovieReviews = props => (
  <ul className='review-list'>
    {
      props.reviews.map((review, i) => (
        <li className='review' key={i}>
          <a href={review.link.url}>{review.display_title} ({review.mpaa_rating ? review.mpaa_rating : 'no rating'})</a>
          <p>{review.summary_short}</p>
        </li>
      ))
    }
  </ul>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews

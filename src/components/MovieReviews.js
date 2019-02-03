// Code MovieReviews Here
import React from 'react'

const MovieReview = ({ display_title, link, critics_pick }) => {
  var checkMark
  if (critics_pick > 0) {checkMark = <span role="img" aria-label="sports-medal">&#127941;</span>}
  return (
    <div key={ display_title } className="review">
      <li>
        <a href={link.url}>{ display_title }</a> {checkMark}
      </li>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map( review => MovieReview(review) ) }
  </div>
)

export default MovieReviews

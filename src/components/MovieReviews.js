import React from 'react'

const MovieReviews = ( {reviews}  ) =>
  <div className="review-list">
    <ul>
      { reviews.map(review => {return <li className="review"><a href={review.link.url}>{review.headline}</a></li>}) }
    </ul>
  </div>;


export default MovieReviews;

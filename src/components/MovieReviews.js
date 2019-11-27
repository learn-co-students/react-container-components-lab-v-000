import React from 'react';

const MovieReviews = (props) => (
  <div className="review-list">
    <ul>
      {
        props.reviews.map((review) => {
          return <li className="review" key={review.link.url}>{review.headline} </li>
        })
      }
    </ul>
  </div>
)

export default MovieReviews;

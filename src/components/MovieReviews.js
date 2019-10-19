import React from 'react';



const Review = ({display_title, summary_short}) => (
  <div className="review">
    <h3 >{display_title }</h3>
    <ul>
      <li> {summary_short} </li>
    </ul>
  </div>
)

const MovieReviews = ( {reviews} ) => (
  <div className="review-list">
    { reviews.map(Review) }
  </div>

)

export default MovieReviews;

// Your MovieReviews component should be stateless and functional.
//
// You are free to lay out each review as you like using the data that the API returns, but make sure that the component outputs a top-level element with the class review-list and that each review is wrapped by an element with class review.
import React from 'react'

const Review = ({ link, display_title, mpaa_rating, summary_short }) => {
  return (

  <li className='review' key={link.url}>
  <h3>{display_title} {mpaa_rating !== '' ? ' - \"' + mpaa_rating + '\"': ''}</h3>
  <p>{summary_short}</p>
  </li>

)}

const MovieReviews = ({ reviews }) => <div className='review-list'><ul>{reviews.map(Review)}</ul></div>

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews

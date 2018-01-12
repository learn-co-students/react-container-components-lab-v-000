// #### `<MovieReviews>`
// * Your `MovieReviews` component should be stateless and functional.
// * You are free to lay out each review as you like using the data
// that the API returns, but make sure that the component outputs a top-level
// element with the class `review-list` and that each review is wrapped by
// an element with class `review`.

import React from 'react';

const Review = ({ reviews }) => {
  return (<div class="review"><p>Reviews: { reviews }</p></div>)
};
const MovieReviews = ( { reviews }) => <div class="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;

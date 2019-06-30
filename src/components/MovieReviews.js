import React from 'react';
import LatestRiviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'
const MovieReviews = ({reviews}) =>
<div className="review-list">
  <ul>
    {reviews.map((r, i) => <li key={i} className="review">{r.display_title}: {r.summary_short}</li> )}
  </ul>
</div>

export default MovieReviews

